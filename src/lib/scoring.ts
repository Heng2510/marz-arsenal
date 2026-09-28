// src/lib/scoring.ts
// Multi-profile scoring engine. All scores and global ranks are pre-computed at build time.

import { GUNS, type Gun } from '../data/guns';
import { GUN_META } from '../data/gun-meta';

export type ProfileId =
  | 'balanced'   // all-round
  | 'dps'        // sustained damage: exp per shot + big mag + fast aim
  | 'precision'  // long range, high crit
  | 'stealth'    // low noise, suppressed
  | 'mobility'   // light, fast aim, CQB
  | 'cqb'        // close-quarters: aim + dmg + mag + light
  | 'logistics'; // common ammo, minimal attachments needed

export interface Profile {
  id: ProfileId;
  label: string;
  desc: string;
}

export const PROFILES: Profile[] = [
  { id: 'balanced', label: 'Balanced', desc: 'All-round weighting' },
  { id: 'dps', label: 'DPS', desc: 'Sustained damage: expected per-shot + mag + aim' },
  { id: 'precision', label: 'Precision', desc: 'Crit + range + stability' },
  { id: 'stealth', label: 'Stealth', desc: 'Quietest, suppressor-friendly' },
  { id: 'mobility', label: 'Mobility', desc: 'Light and fast to aim' },
  { id: 'cqb', label: 'CQB', desc: 'Close-quarters: fast aim, big mag, high dmg' },
  { id: 'logistics', label: 'Logistics', desc: 'Common ammo, few attachments required' },
];

// ---------- HELPERS ----------

function norm(v: number, min: number, max: number): number {
  if (max === min) return 0.5;
  return Math.max(0, Math.min(1, (v - min) / (max - min)));
}

// Expected damage per shot = dmgMax × [1 + critC × (critX - 1)]
// Public — also used by the Ranking tab to display the "Exp. DMG" column.
export function expectedDamage(dmgMax: number, critChancePct: number, critDmgMult: number): number {
  const critC = critChancePct / 100;
  return dmgMax * (1 + critC * (critDmgMult - 1));
}

// ---------- FEATURES ----------

interface Features {
  dmg: number;
  critC: number;
  critX: number;
  range: number;
  quiet: number;
  quick: number;
  light: number;
  mag: number;
  attach: number;
  ammoCommon: number;
  ergo: number;
  stock: number;
  burst: number;
  bayonet: number;
  expectedDmg: number;
}

function extractFeatures(g: Gun): Features {
  const meta = GUN_META[g.name] ?? {};
  const ammoRarity = meta.ammoRarity ?? 2;
  return {
    dmg: norm(g.dmgMax, 0.9, 2.5),
    critC: norm(g.crit, 15, 70),
    critX: norm(g.critDmg, 3.0, 12.0),
    range: norm(g.range, 20, 60),
    quiet: norm(230 - g.noise, 30, 200),
    quick: norm(70 - g.aimTime, 0, 55),
    light: norm(7.5 - g.weight, 0.5, 7.0),
    mag: norm(g.mag, 2, 100),
    attach: norm(meta.attachCount ?? 0, 0, 10),
    ammoCommon: norm(4 - ammoRarity, 1, 3),
    ergo: norm((meta.ergonomics ?? 2) - 1, 0, 2),
    stock: meta.hasStock ? 1 : 0,
    burst: meta.hasBurst ? 1 : 0,
    bayonet: meta.hasBayonet ? 1 : 0,
    // Normalized between 1.0 (weak pistol) and 12.0 (shotgun).
    expectedDmg: norm(expectedDamage(g.dmgMax, g.crit, g.critDmg), 1.0, 12.0),
  };
}

// ---------- WEIGHTS ----------

const WEIGHTS: Record<ProfileId, Partial<Record<keyof Features, number>>> = {
  balanced: {
    dmg: 0.16, critC: 0.10, critX: 0.12, range: 0.10, quiet: 0.08,
    quick: 0.10, light: 0.06, mag: 0.08, attach: 0.08,
    ammoCommon: 0.06, ergo: 0.04, stock: 0.02,
  },
  // Sustained damage: expected per-shot + big mag + fast aim.
  // Reload cycle is the bottleneck in sustained fire, so mag is weighted heavily.
  dps: {
    expectedDmg: 0.35,
    mag: 0.30,
    quick: 0.20,
    range: 0.08,
    burst: 0.04,
    light: 0.03,
  },
  precision: {
    dmg: 0.15, critC: 0.25, critX: 0.20, range: 0.25,
    quiet: 0.05, quick: 0.05, attach: 0.05,
  },
  stealth: {
    quiet: 0.45, dmg: 0.10, critC: 0.10, critX: 0.10,
    quick: 0.10, light: 0.10, bayonet: 0.05,
  },
  mobility: {
    light: 0.25, quick: 0.25, ergo: 0.15, mag: 0.10,
    dmg: 0.10, critC: 0.05, quiet: 0.10,
  },
  cqb: {
    quick: 0.28, dmg: 0.22, mag: 0.18, light: 0.12,
    ergo: 0.08, critC: 0.06, critX: 0.04, burst: 0.02,
  },
  logistics: {
    ammoCommon: 0.35, attach: 0.20, mag: 0.15, light: 0.10,
    quiet: 0.10, quick: 0.10,
  },
};

function logisticsAttachScore(attachCount: number): number {
  return norm(10 - attachCount, 0, 10);
}

// ---------- SCORING ----------

function score(g: Gun, profile: ProfileId): number {
  const f = extractFeatures(g);
  const w = WEIGHTS[profile];
  const meta = GUN_META[g.name] ?? {};
  let sum = 0;
  let totalWeight = 0;

  for (const [k, weight] of Object.entries(w)) {
    if (weight == null) continue;
    totalWeight += weight;

    if (profile === 'logistics' && k === 'attach') {
      sum += logisticsAttachScore(meta.attachCount ?? 0) * weight;
    } else {
      sum += (f as any)[k] * weight;
    }
  }
  return totalWeight > 0 ? sum / totalWeight : 0;
}

// ---------- PUBLIC API ----------

export interface ScoredGun extends Gun {
  scores: Record<ProfileId, number>;
  globalRanks: Record<ProfileId, number>;
}

export function buildScoredGuns(): ScoredGun[] {
  const base = GUNS.map(g => ({
    ...g,
    scores: {} as Record<ProfileId, number>,
    globalRanks: {} as Record<ProfileId, number>,
  }));

  for (const p of PROFILES) {
    for (const g of base) g.scores[p.id] = score(g, p.id);
    const sorted = [...base].sort((a, b) => b.scores[p.id] - a.scores[p.id]);
    sorted.forEach((g, i) => { g.globalRanks[p.id] = i + 1; });
  }
  return base;
}

export const SCORED_GUNS = buildScoredGuns();