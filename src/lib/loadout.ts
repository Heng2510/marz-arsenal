// src/lib/loadout.ts
import type { Gun } from '../data/guns';
import { ATTACHMENTS_EXT, type AttachmentExt, type StatModifier } from '../data/attachments-extended';

export interface EffectiveStats {
  dmgMin: number; dmgMax: number;
  crit: number; critDmg: number;
  hitChance: number; aimTime: number;
  range: number; noise: number;
  mag: number; weight: number;
}

export function getBaseStats(g: Gun): EffectiveStats {
  return {
    dmgMin: g.dmgMin,
    dmgMax: g.dmgMax,
    crit: g.crit,
    critDmg: g.critDmg,
    hitChance: g.hitChance,
    aimTime: g.aimTime,
    range: g.range,
    noise: g.noise,
    mag: g.mag,
    weight: g.weight,
  };
}

function applyModifier(stats: Record<string, any>, mod: StatModifier): void {
  const { op, stat, value } = mod;
  if (!(stat in stats)) return;
  const cur = stats[stat];

  if (op === 'mul' && typeof value === 'number') {
    stats[stat] = cur * value;
  } else if (op === 'add' && typeof value === 'number') {
    stats[stat] = cur + value;
  } else if (op === 'set') {
    stats[stat] = value;
  }
}

export function computeLoadout(g: Gun, attachmentNames: string[]): EffectiveStats {
  const base = getBaseStats(g);
  const stats: Record<string, any> = { ...base };
  let weightDelta = 0;

  for (const name of attachmentNames) {
    const ext = ATTACHMENTS_EXT.find(a => a.name === name);

    if (ext?.modifiers) {
      for (const mod of ext.modifiers) {
        applyModifier(stats, mod);
      }
    }

    // Weight is additive: each attachment adds its own weight on top of the base.
    // Negative values (slings) subtract.
    const wm = ext?.weightModifier ?? 0;
    weightDelta += wm;
  }

  let finalWeight = base.weight + weightDelta;
  if (finalWeight < 0.1) finalWeight = 0.1;

  return {
    dmgMin: round2(stats.dmgMin),
    dmgMax: round2(stats.dmgMax),
    crit: round2(stats.crit),
    critDmg: round2(stats.critDmg),
    hitChance: round2(stats.hitChance),
    aimTime: round2(stats.aimTime),
    range: round2(stats.range),
    noise: round2(stats.noise),
    mag: Math.round(stats.mag),
    weight: round2(finalWeight),
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export interface LoadoutCheck {
  ok: boolean;
  errors: string[];
}

export function validateLoadout(g: Gun, attachmentNames: string[]): LoadoutCheck {
  const errors: string[] = [];
  const gunMounts = g.mounts ?? [];
  const installs = attachmentNames
    .map(n => ATTACHMENTS_EXT.find(a => a.name === n))
    .filter(Boolean) as AttachmentExt[];

  for (const att of installs) {
    // Check direct-mount requirement first
    if (att.directMounts && att.directMounts.length > 0) {
      if (!att.directMounts.includes(g.name)) {
        errors.push(`${att.name} does not fit on ${g.name}`);
      }
    } else if (att.requires && att.requires.length > 0) {
      const has = att.requires.some(r => gunMounts.includes(r));
      if (!has) {
        errors.push(`${att.name} requires one of: ${att.requires.join(', ')}`);
      }
    }
  }

  for (const att of installs) {
    if (att.pairsWith && attachmentNames.includes(att.pairsWith)) {
      errors.push(`${att.name} conflicts with ${att.pairsWith}`);
    }
  }

  return { ok: errors.length === 0, errors: [...new Set(errors)] };
}

// --- List attachments installable on a given gun ---
export interface AttachmentOption {
  name: string;
  category: AttachmentExt['category'];
  slot: AttachmentExt['slot'];
  canInstallNow: boolean;
  needsMount?: string[];
  direct?: boolean;
}

export function listMountOptions(g: Gun): AttachmentOption[] {
  const gunMounts = g.mounts ?? [];
  return gunMounts.map((name): AttachmentOption => {
    const ext = ATTACHMENTS_EXT.find(a => a.name === name);
    return {
      name,
      category: 'Mount' as const,
      slot: (ext?.slot ?? 'RailUp') as AttachmentExt['slot'],
      canInstallNow: true,
    };
  });
}

export function listInstallableAttachments(g: Gun): AttachmentOption[] {
  const gunMounts = g.mounts ?? [];
  const results: (AttachmentOption | null)[] = ATTACHMENTS_EXT
    .filter(a => a.category !== 'Mount')
    .map((a): AttachmentOption | null => {
      // Direct-mount parts
      if (a.directMounts && a.directMounts.length > 0) {
        if (a.directMounts.includes(g.name)) {
          return {
            name: a.name,
            category: a.category,
            slot: a.slot,
            canInstallNow: true,
            direct: true,
          };
        }
        // Not compatible with this gun — skip entirely
        return null;
      }

      // Rail-mounted parts
      if (!a.requires || a.requires.length === 0) {
        return {
          name: a.name,
          category: a.category,
          slot: a.slot,
          canInstallNow: true,
        };
      }

      const met = a.requires.some(r => gunMounts.includes(r));
      if (met) {
        return {
          name: a.name,
          category: a.category,
          slot: a.slot,
          canInstallNow: true,
        };
      }

      return {
        name: a.name,
        category: a.category,
        slot: a.slot,
        canInstallNow: false,
        needsMount: a.requires,
      };
    });

  return results.filter((x): x is AttachmentOption => x !== null);
}