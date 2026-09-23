// src/lib/scoring.ts
// Multi-profile scoring engine. All scores and global ranks are pre-computed at build time.

import { GUNS, type Gun } from '../data/guns';
import { GUN_META } from '../data/gun-meta';

export type ProfileId =
  | 'balanced'   // all-round
  | 'dps'        // damage per second
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
  { id: 'balanced',  label: 'Balanced',  desc: 'All-round weighting' },
  { id: 'dps',       label: 'DPS',       desc: 'Highest sustained damage' },
  { id: 'precision', label: 'Precision', desc: 'Crit + range + stability' },
  { id: 'stealth',   label: 'Stealth',   desc: 'Quietest, suppressor-friendly' },
  { id: 'mobility',  label: 'Mobility',  desc: 'Light and fast to aim' },
  { id: 'cqb',       label: 'CQB',       desc: 'Close-quarters: fast aim, big mag, high dmg' },
  { id: 'logistics', label: 'Logistics', desc: 'Common ammo, few attachments required' },
];

// ---------- HELPERS ----------

// Min-max normalize to 0..1
function norm(v: number, min: number, max: number): number {
  if (max === min) return 0.5;
  return Math.max(0, Math.min(1, (v - min) / (max - min)));
}

// ---------- FEATURES ----------

// Normalized features (all 0..1) extracted from a Gun + its meta
interface Features {
  dmg: number;
  critC: number;
  critX: number;
  range: number;
  quiet: number;      // low noise = high value
  quick: number;      // fast aim = high value
  light: number;      // low weight = high value
  mag: number;
  attach: number;     // more attachment slots = high value
  ammoCommon: number; // common ammo = high value
  ergo: number;       // ergonomics 1..3
  stock: number;      // 0 or 1
  burst: number;      // 0 or 1
  bayonet: number;    // 0 or 1
}

function extractFeatures(g: Gun): Features {
  const meta = GUN_META[g.name] ?? {};
  const ammoRarity = meta.ammoRarity ?? 2;
  return {
    dmg:        norm(g.dmgMax, 0.9, 2.5),
    critC:      norm(g.crit, 15, 70),
    critX:      norm(g.critDmg, 3.0, 12.0),
    range:      norm(g.range, 20, 60),
    quiet:      norm(230 - g.noise, 30, 200), // noise 230 → 0, 30 → 1
    quick:      norm(70 - g.aimTime, 0, 55),  // aim 70 → 0, 15 → 1
    light:      norm(7.5 - g.weight, 0.5, 7.0),
    mag:        norm(g.mag, 2, 100),
    attach:     norm(meta.attachCount ?? 0, 0, 10),
    ammoCommon: norm(4 - ammoRarity, 1, 3),   // rarity 1 → 1, 3 → 0
    ergo:       norm((meta.ergonomics ?? 2) - 1, 0, 2),
    stock:      meta.hasStock ? 1 : 0,
    burst:      meta.hasBurst ? 1 : 0,
    bayonet:    meta.hasBayonet ? 1 : 0,
  };
}

// ---------- WEIGHTS ----------
// Each row sums to ~1. Tune here to shift profile behaviour.

const WEIGHTS: Record<ProfileId, Partial<Record<keyof Features, number>>> = {
  balanced: {
    dmg: 0.16, critC: 0.10, critX: 0.12, range: 0.10, quiet: 0.08,
    quick: 0.10, light: 0.06, mag: 0.08, attach: 0.08,
    ammoCommon: 0.06, ergo: 0.04, stock: 0.02,
  },
  dps: {
    dmg: 0.30, critC: 0.15, critX: 0.20, mag: 0.15,
    quick: 0.10, burst: 0.05, range: 0.05,
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
  // CQB: reward fast aim + high per-shot damage + big mag + light weight.
  // Range barely matters; stealth isn't a priority.
  cqb: {
    quick: 0.28, dmg: 0.22, mag: 0.18, light: 0.12,
    ergo: 0.08, critC: 0.06, critX: 0.04, burst: 0.02,
  },
  // Logistics: reward common ammo + few attachments needed (inverted attach).
  logistics: {
    ammoCommon: 0.35, attach: 0.20, mag: 0.15, light: 0.10,
    quiet: 0.10, quick: 0.10,
  },
};

// Logistics uses "few attachments needed" as a good thing
function logisticsAttachScore(attachCount: number): number {
  // 0 attachments → 1, 10 attachments → 0
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

// Build once at module load. Global rank is computed against the full gun list,
// so it never changes when the user filters in the UI.
export function buildScoredGuns(): ScoredGun[] {
  const base = GUNS.map(g => ({
    ...g,
    scores: {} as Record<ProfileId, number>,
    globalRanks: {} as Record<ProfileId, number>,
  }));

  for (const p of PROFILES) {
    // Score every gun for this profile
    for (const g of base) g.scores[p.id] = score(g, p.id);

    // Assign global rank based on the full list
    const sorted = [...base].sort((a, b) => b.scores[p.id] - a.scores[p.id]);
    sorted.forEach((g, i) => { g.globalRanks[p.id] = i + 1; });
  }
  return base;
}

export const SCORED_GUNS = buildScoredGuns();