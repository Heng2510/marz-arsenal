// src/data/attachments-extended.ts
// Extracted from MarzGuns WeaponSystems Lua files and item definition .txt files.
// Weight modifiers come from the WeightModifier field in each part .txt file.
//   - Positive value: multiplies base weapon weight (e.g. 1.3 = +30%)
//   - Negative value: absolute offset (e.g. -1 subtracts 1kg, used by slings)
//   - 0 or undefined: no weight change

export type ModifierOp = 'mul' | 'add' | 'set';

export interface StatModifier {
  op: ModifierOp;
  stat: string;
  value: number | string | boolean | null;
  note?: string;
}

export type AttachmentSlot =
  | 'Scope' | 'Foregrip' | 'Bipod' | 'Stock' | 'Sling'
  | 'Canon' | 'CanonMount' | 'Barrel' | 'Selector'
  | 'LaserRifle' | 'LightRifle' | 'Underbarrel'
  | 'RailUp' | 'RailDown' | 'RailLeft' | 'RailRight'
  | 'BayonetKnife' | 'Shellholder';

export interface AttachmentExt {
  name: string;
  category:
  | 'Sight' | 'Scope' | 'Foregrip' | 'Bipod' | 'Stock' | 'Sling'
  | 'Laser' | 'Light' | 'Suppressor' | 'Muzzle' | 'Mount'
  | 'Bayonet' | 'Shellholder' | 'Barrel';
  slot: AttachmentSlot;
  requires?: string[];
  directMounts?: string[];
  modifiers?: StatModifier[];
  pairsWith?: string;
  weightModifier?: number;
  note?: string;
}

export const ATTACHMENTS_EXT: AttachmentExt[] = [
  // ========== SIGHTS (short) ==========
  {
    name: 'ReflexS2_Sight', category: 'Sight', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.90 },
      { op: 'mul', stat: 'crit', value: 1.05 },
      { op: 'mul', stat: 'hitChance', value: 1.05 },
    ]
  },
  {
    name: 'Kobra_Sight', category: 'Sight', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 0.22,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.92 },
      { op: 'mul', stat: 'crit', value: 1.10 },
      { op: 'mul', stat: 'hitChance', value: 1.10 },
    ]
  },
  {
    name: 'OKP3_Sight', category: 'Sight', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 0.4,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.95 },
      { op: 'mul', stat: 'crit', value: 1.15 },
      { op: 'mul', stat: 'hitChance', value: 1.15 },
    ]
  },
  {
    name: 'JS14_Sight', category: 'Sight', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 0.44,
    modifiers: [
      { op: 'mul', stat: 'crit', value: 1.20 },
      { op: 'mul', stat: 'hitChance', value: 1.20 },
    ]
  },
  {
    name: 'EXPS3_Sight', category: 'Sight', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 0.45,
    modifiers: [
      { op: 'mul', stat: 'crit', value: 1.02 },
      { op: 'mul', stat: 'hitChance', value: 1.02 },
      { op: 'mul', stat: 'range', value: 1.10 },
    ]
  },
  {
    name: 'EXPS1_Sight', category: 'Sight', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 0.45,
    modifiers: [
      { op: 'mul', stat: 'crit', value: 1.02 },
      { op: 'mul', stat: 'hitChance', value: 1.02 },
      { op: 'mul', stat: 'range', value: 1.12 },
    ]
  },
  {
    name: 'Aimpoint_Sight', category: 'Sight', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 0.45,
    modifiers: [
      { op: 'mul', stat: 'crit', value: 1.03 },
      { op: 'mul', stat: 'hitChance', value: 1.03 },
      { op: 'mul', stat: 'range', value: 1.15 },
    ]
  },

  // ========== MID-RANGE SCOPES ==========
  {
    name: 'LR4X_Scope', category: 'Scope', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 0.8,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 1.10 },
      { op: 'mul', stat: 'crit', value: 1.06 },
      { op: 'mul', stat: 'hitChance', value: 1.06 },
      { op: 'mul', stat: 'range', value: 1.20 },
    ]
  },
  {
    name: 'TA28_Scope', category: 'Scope', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 0.82,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 1.15 },
      { op: 'mul', stat: 'crit', value: 1.10 },
      { op: 'mul', stat: 'hitChance', value: 1.10 },
      { op: 'mul', stat: 'range', value: 1.25 },
    ]
  },
  {
    name: 'ElcanX2_Scope', category: 'Scope', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 0.9,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 1.20 },
      { op: 'mul', stat: 'crit', value: 1.12 },
      { op: 'mul', stat: 'hitChance', value: 1.12 },
      { op: 'mul', stat: 'range', value: 1.25 },
    ]
  },

  // ========== LONG-RANGE SCOPES ==========
  {
    name: 'TR06X_Scope', category: 'Scope', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 1.0,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 1.25 },
      { op: 'mul', stat: 'crit', value: 1.15 },
      { op: 'mul', stat: 'hitChance', value: 1.15 },
      { op: 'mul', stat: 'range', value: 1.30 },
    ]
  },
  {
    name: 'PSO1_Scope', category: 'Scope', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 1.1,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 1.30 },
      { op: 'mul', stat: 'crit', value: 1.20 },
      { op: 'mul', stat: 'hitChance', value: 1.20 },
      { op: 'mul', stat: 'range', value: 1.50 },
    ]
  },
  {
    name: 'LR10X_Scope', category: 'Scope', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 1.2,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 1.35 },
      { op: 'mul', stat: 'crit', value: 1.30 },
      { op: 'mul', stat: 'hitChance', value: 1.30 },
      { op: 'mul', stat: 'range', value: 1.70 },
    ]
  },
  {
    name: 'LRX12X_Scope', category: 'Scope', slot: 'Scope', requires: ['Picatinny_Rail_Up', 'AK_Mount', 'Sniper_Mount'], weightModifier: 1.2,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 1.50 },
      { op: 'mul', stat: 'crit', value: 1.50 },
      { op: 'mul', stat: 'hitChance', value: 1.50 },
      { op: 'mul', stat: 'range', value: 2.00 },
    ]
  },

  // ========== PISTOL SIGHTS ==========
  {
    name: 'PL4_Sight', category: 'Sight', slot: 'Scope', directMounts: ['M92FS', 'M93R', 'HIPOWER', 'P226', 'M1911', 'USP', 'DEAGLE', 'PYTHON', 'SW629'], weightModifier: 0.1,
    modifiers: [
      { op: 'mul', stat: 'crit', value: 1.02 },
      { op: 'mul', stat: 'hitChance', value: 1.02 },
    ]
  },
  {
    name: 'PS1_Sight', category: 'Sight', slot: 'Scope', directMounts: ['M92FS', 'M93R', 'HIPOWER', 'P226', 'M1911', 'USP', 'DEAGLE', 'PYTHON', 'SW629'], weightModifier: 0.15,
    modifiers: [
      { op: 'mul', stat: 'crit', value: 1.03 },
      { op: 'mul', stat: 'hitChance', value: 1.03 },
    ]
  },
  {
    name: 'PM2_Sight', category: 'Sight', slot: 'Scope', directMounts: ['M92FS', 'M93R', 'HIPOWER', 'P226', 'M1911', 'USP', 'DEAGLE', 'PYTHON', 'SW629'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'crit', value: 1.08 },
      { op: 'mul', stat: 'hitChance', value: 1.08 },
      { op: 'mul', stat: 'range', value: 1.08 },
    ]
  },
  {
    name: 'PRL1_Scope', category: 'Scope', slot: 'Scope', directMounts: ['DEAGLE', 'PYTHON', 'SW629'], weightModifier: 0.4,
    modifiers: [
      { op: 'mul', stat: 'crit', value: 1.10 },
      { op: 'mul', stat: 'hitChance', value: 1.10 },
      { op: 'mul', stat: 'range', value: 1.10 },
    ]
  },

  // ========== FOREGRIPS ==========
  {
    name: 'Stub_Foregrip', category: 'Foregrip', slot: 'Foregrip', requires: ['Picatinny_Rail_Down'], weightModifier: 0.3,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.80 },
      { op: 'mul', stat: 'crit', value: 1.15 },
      { op: 'mul', stat: 'hitChance', value: 1.15 },
    ]
  },
  {
    name: 'MKC_Foregrip', category: 'Foregrip', slot: 'Foregrip', requires: ['Picatinny_Rail_Down'], weightModifier: 0.5,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.95 },
      { op: 'mul', stat: 'crit', value: 1.25 },
      { op: 'mul', stat: 'hitChance', value: 1.25 },
    ]
  },
  {
    name: 'MK2_Foregrip', category: 'Foregrip', slot: 'Foregrip', requires: ['Picatinny_Rail_Down'], weightModifier: 0.3,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.75 },
      { op: 'mul', stat: 'crit', value: 1.10 },
      { op: 'mul', stat: 'hitChance', value: 1.10 },
    ]
  },

  // ========== BIPODS (external) ==========
  {
    name: 'Bipod_Folded', category: 'Bipod', slot: 'Bipod', requires: ['Picatinny_Rail_Down'], weightModifier: 1.3,
    pairsWith: 'Bipod_Deployed'
  },
  {
    name: 'Bipod_Deployed', category: 'Bipod', slot: 'Bipod', requires: ['Picatinny_Rail_Down'], weightModifier: 1.3,
    pairsWith: 'Bipod_Folded',
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 1.10 },
      { op: 'mul', stat: 'crit', value: 1.15 },
      { op: 'mul', stat: 'hitChance', value: 1.15 },
    ]
  },

  // ========== INTEGRATED BIPODS ==========
  // Folded state has no weight modifier; deployed adds 0.7 (per integrated.txt).
  {
    name: 'M60_Integrated_Bipod_Folded', category: 'Bipod', slot: 'Bipod',
    directMounts: ['M60'], weightModifier: 0
  },
  {
    name: 'M60_Integrated_Bipod_Deployed', category: 'Bipod', slot: 'Bipod',
    directMounts: ['M60'], weightModifier: 0.7,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 1.3 },
      { op: 'mul', stat: 'crit', value: 1.1 },
      { op: 'mul', stat: 'hitChance', value: 1.1 },
      { op: 'set', stat: 'useEndurance', value: false },
    ]
  },
  {
    name: 'BAR_Integrated_Bipod_Folded', category: 'Bipod', slot: 'Bipod',
    directMounts: ['BAR'], weightModifier: 0
  },
  {
    name: 'BAR_Integrated_Bipod_Deployed', category: 'Bipod', slot: 'Bipod',
    directMounts: ['BAR'], weightModifier: 0.7,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 1.2 },
      { op: 'mul', stat: 'crit', value: 1.25 },
      { op: 'mul', stat: 'hitChance', value: 1.25 },
    ]
  },
  {
    name: 'M24_Integrated_Bipod_Folded', category: 'Bipod', slot: 'Bipod',
    directMounts: ['M24'], weightModifier: 0
  },
  {
    name: 'M24_Integrated_Bipod_Deployed', category: 'Bipod', slot: 'Bipod',
    directMounts: ['M24'], weightModifier: 0.7
  },

  // ========== STOCKS (direct mount) ==========
  {
    name: 'Beretta_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['M92FS', 'M93R'], weightModifier: 0.9,
    pairsWith: 'Beretta_Stock_Deployed'
  },
  {
    name: 'Beretta_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['M92FS', 'M93R'], weightModifier: 0.9,
    pairsWith: 'Beretta_Stock_Folded',
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.10 },
      { op: 'mul', stat: 'aimTime', value: 0.90 },
    ]
  },
  {
    name: 'VP70M_Stock', category: 'Stock', slot: 'Stock',
    directMounts: ['VP70M'], weightModifier: 0.9,
    note: 'Enables burst fire mode'
  },

  // ========== INTEGRATED STOCKS ==========
  // Both folded and deployed have Weight = 0.2 in integrated.txt, so no diff.
  {
    name: 'AKS74U_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['AKS74U'], weightModifier: 0
  },
  {
    name: 'AKS74U_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['AKS74U'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.25 },
      { op: 'mul', stat: 'aimTime', value: 0.85 },
    ]
  },
  {
    name: 'ASVAL_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['ASVAL'], weightModifier: 0
  },
  {
    name: 'ASVAL_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['ASVAL'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.15 },
      { op: 'mul', stat: 'aimTime', value: 0.90 },
    ]
  },
  {
    name: 'FNC_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['FNC'], weightModifier: 0
  },
  {
    name: 'FNC_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['FNC'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.15 },
      { op: 'mul', stat: 'aimTime', value: 0.95 },
    ]
  },
  {
    name: 'G36C_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['G36C'], weightModifier: 0
  },
  {
    name: 'G36C_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['G36C'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.15 },
      { op: 'mul', stat: 'aimTime', value: 0.75 },
    ]
  },
  {
    name: 'G36_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['G36'], weightModifier: 0
  },
  {
    name: 'G36_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['G36'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.15 },
      { op: 'mul', stat: 'aimTime', value: 0.85 },
    ]
  },
  {
    name: 'CAR15_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['CAR15'], weightModifier: 0
  },
  {
    name: 'CAR15_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['CAR15'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.15 },
      { op: 'mul', stat: 'aimTime', value: 0.85 },
    ]
  },
  {
    name: 'XM177_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['XM177'], weightModifier: 0
  },
  {
    name: 'XM177_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['XM177'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.15 },
      { op: 'mul', stat: 'aimTime', value: 0.85 },
    ]
  },
  {
    name: 'M4A1_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['M4A1'], weightModifier: 0
  },
  {
    name: 'M4A1_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['M4A1'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.15 },
      { op: 'mul', stat: 'aimTime', value: 0.85 },
    ]
  },
  {
    name: 'SPAS12_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['SPAS12'], weightModifier: 0
  },
  {
    name: 'SPAS12_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['SPAS12'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.1 },
      { op: 'mul', stat: 'aimTime', value: 0.9 },
    ]
  },
  {
    name: 'MP5_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['MP5'], weightModifier: 0
  },
  {
    name: 'MP5_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['MP5'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.15 },
      { op: 'mul', stat: 'aimTime', value: 0.75 },
    ]
  },
  {
    name: 'MP5SD_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['MP5SD'], weightModifier: 0
  },
  {
    name: 'MP5SD_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['MP5SD'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.15 },
      { op: 'mul', stat: 'aimTime', value: 0.75 },
    ]
  },
  {
    name: 'MAC10_Integrated_Stock_Folded', category: 'Stock', slot: 'Stock',
    directMounts: ['MAC10'], weightModifier: 0
  },
  {
    name: 'MAC10_Integrated_Stock_Deployed', category: 'Stock', slot: 'Stock',
    directMounts: ['MAC10'], weightModifier: 0.2,
    modifiers: [
      { op: 'mul', stat: 'hitChance', value: 1.1 },
      { op: 'mul', stat: 'aimTime', value: 0.9 },
    ]
  },

  // ========== SLINGS (negative weight offset) ==========
  {
    name: 'Rem700_Sling', category: 'Sling', slot: 'Sling',
    directMounts: ['REMINGTON_700'], weightModifier: -1,
    note: 'Weight -1 kg'
  },
  {
    name: 'Model_70_Sling', category: 'Sling', slot: 'Sling',
    directMounts: ['MODEL_70'], weightModifier: -1,
    note: 'Weight -1 kg'
  },

  // ========== LASERS ==========
  {
    name: 'AimRight_Laser', category: 'Laser', slot: 'LaserRifle', requires: ['Picatinny_Rail_Right'], weightModifier: 0.6,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.95 },
      { op: 'mul', stat: 'crit', value: 1.05 },
      { op: 'mul', stat: 'hitChance', value: 1.05 },
    ]
  },
  {
    name: 'LRX-7_Laser', category: 'Laser', slot: 'LaserRifle', requires: ['Picatinny_Rail_Right'], weightModifier: 0.6,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.90 },
      { op: 'mul', stat: 'crit', value: 1.03 },
      { op: 'mul', stat: 'hitChance', value: 1.03 },
    ]
  },
  {
    name: 'PJ-3_Laser', category: 'Laser', slot: 'Underbarrel',
    directMounts: ['M92FS', 'HIPOWER', 'M1911', 'USP', 'DEAGLE', 'P226'], weightModifier: 0.6,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.90 },
      { op: 'mul', stat: 'crit', value: 1.03 },
      { op: 'mul', stat: 'hitChance', value: 1.03 },
    ]
  },
  {
    name: 'PX1_Laser', category: 'Laser', slot: 'Underbarrel',
    directMounts: ['M92FS', 'HIPOWER', 'M1911', 'USP', 'DEAGLE', 'P226'], weightModifier: 0.6,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.90 },
      { op: 'mul', stat: 'crit', value: 1.03 },
      { op: 'mul', stat: 'hitChance', value: 1.03 },
    ]
  },
  {
    name: 'TR-1_Laser', category: 'Laser', slot: 'Underbarrel',
    directMounts: ['M92FS', 'HIPOWER', 'M1911', 'USP', 'DEAGLE', 'P226'], weightModifier: 0.6,
    modifiers: [
      { op: 'mul', stat: 'aimTime', value: 0.90 },
      { op: 'mul', stat: 'crit', value: 1.03 },
      { op: 'mul', stat: 'hitChance', value: 1.03 },
    ]
  },

  // ========== LIGHTS ==========
  { name: 'BrightPoint-5_Light', category: 'Light', slot: 'LightRifle', requires: ['Picatinny_Rail_Left'], weightModifier: 0.2 },
  { name: 'SR7_Light', category: 'Light', slot: 'LightRifle', requires: ['Picatinny_Rail_Left'], weightModifier: 0.2 },
  {
    name: 'LP_Light', category: 'Light', slot: 'Underbarrel',
    directMounts: ['M92FS', 'HIPOWER', 'M1911', 'USP', 'DEAGLE', 'P226'], weightModifier: 0.2
  },
  {
    name: 'TL_Light', category: 'Light', slot: 'Underbarrel',
    directMounts: ['M92FS', 'HIPOWER', 'M1911', 'USP', 'DEAGLE', 'P226'], weightModifier: 0.2
  },

  // ========== SUPPRESSORS ==========
  {
    name: 'MKI_Suppressor', category: 'Suppressor', slot: 'Canon',
    directMounts: ['M16A1', 'M16A2', 'M16A3', 'G36C', 'G36', 'FAMAS', 'CAR15', 'M4A1', 'M16A2_M203', 'FNC', 'MINI_14'], weightModifier: 1.0,
    modifiers: [
      { op: 'mul', stat: 'noise', value: 0.30 },
      { op: 'mul', stat: 'soundVolume', value: 0.30 },
      { op: 'mul', stat: 'dmgMax', value: 0.90 },
      { op: 'mul', stat: 'dmgMin', value: 0.90 },
      { op: 'set', stat: 'muzzleFlash', value: null },
    ]
  },
  {
    name: 'NDR_Suppressor', category: 'Suppressor', slot: 'Canon',
    directMounts: ['M16A1', 'M16A2', 'M16A3', 'G36C', 'G36', 'FAMAS', 'CAR15', 'M4A1', 'M16A2_M203', 'FNC', 'MINI_14'], weightModifier: 0.9,
    modifiers: [
      { op: 'mul', stat: 'noise', value: 0.30 },
      { op: 'mul', stat: 'soundVolume', value: 0.30 },
      { op: 'mul', stat: 'dmgMax', value: 0.90 },
      { op: 'mul', stat: 'dmgMin', value: 0.90 },
      { op: 'set', stat: 'muzzleFlash', value: null },
    ]
  },
  {
    name: 'PBS-1_Suppressor', category: 'Suppressor', slot: 'Canon',
    directMounts: ['AK74', 'AKS74U', 'AK47'], weightModifier: 1.2,
    modifiers: [
      { op: 'mul', stat: 'noise', value: 0.30 },
      { op: 'mul', stat: 'soundVolume', value: 0.30 },
      { op: 'mul', stat: 'dmgMax', value: 0.90 },
      { op: 'mul', stat: 'dmgMin', value: 0.90 },
      { op: 'set', stat: 'muzzleFlash', value: null },
    ]
  },
  {
    name: 'M&P_Suppressor', category: 'Suppressor', slot: 'Canon',
    directMounts: ['M92FS', 'M93R', 'HIPOWER', 'P226'], weightModifier: 1.2,
    modifiers: [
      { op: 'mul', stat: 'noise', value: 0.30 },
      { op: 'mul', stat: 'soundVolume', value: 0.30 },
      { op: 'mul', stat: 'dmgMax', value: 0.90 },
      { op: 'mul', stat: 'dmgMin', value: 0.90 },
      { op: 'set', stat: 'muzzleFlash', value: null },
    ]
  },
  {
    name: 'Shh9_Suppressor', category: 'Suppressor', slot: 'Canon',
    directMounts: ['M92FS', 'M93R', 'HIPOWER', 'P226'], weightModifier: 1.2,
    modifiers: [
      { op: 'mul', stat: 'noise', value: 0.30 },
      { op: 'mul', stat: 'soundVolume', value: 0.30 },
      { op: 'mul', stat: 'dmgMax', value: 0.90 },
      { op: 'mul', stat: 'dmgMin', value: 0.90 },
      { op: 'set', stat: 'muzzleFlash', value: null },
    ]
  },
  {
    name: 'P45_Suppressor', category: 'Suppressor', slot: 'Canon',
    directMounts: ['M1911', 'USP', 'MAC10'], weightModifier: 0.8,
    modifiers: [
      { op: 'mul', stat: 'noise', value: 0.30 },
      { op: 'mul', stat: 'soundVolume', value: 0.30 },
      { op: 'mul', stat: 'dmgMax', value: 0.90 },
      { op: 'mul', stat: 'dmgMin', value: 0.90 },
      { op: 'set', stat: 'muzzleFlash', value: null },
    ]
  },

  // ========== MUZZLE DEVICES ==========
  {
    name: 'LR2_Compensator', category: 'Muzzle', slot: 'Canon',
    directMounts: ['M16A1', 'M16A2', 'M16A3', 'G36C', 'G36', 'FAMAS', 'CAR15', 'M4A1', 'M16A2_M203'], weightModifier: 1.0,
    modifiers: [
      { op: 'mul', stat: 'noise', value: 0.90 },
      { op: 'mul', stat: 'soundVolume', value: 0.90 },
      { op: 'set', stat: 'muzzleFlash', value: null },
    ]
  },
  {
    name: 'LX_Flashhider', category: 'Muzzle', slot: 'Canon',
    directMounts: ['M16A1', 'M16A2', 'M16A3', 'G36C', 'G36', 'FAMAS', 'CAR15', 'M4A1', 'M16A2_M203'], weightModifier: 0.9,
    modifiers: [
      { op: 'mul', stat: 'noise', value: 0.95 },
      { op: 'mul', stat: 'soundVolume', value: 0.95 },
      { op: 'set', stat: 'muzzleFlash', value: null },
    ]
  },
  {
    name: 'Trix42_Muzzlebreak', category: 'Muzzle', slot: 'Canon',
    directMounts: ['M16A1', 'M16A2', 'M16A3', 'G36C', 'G36', 'FAMAS', 'CAR15', 'M4A1', 'M16A2_M203'], weightModifier: 1.2,
    modifiers: [
      { op: 'mul', stat: 'noise', value: 0.95 },
      { op: 'mul', stat: 'soundVolume', value: 0.95 },
      { op: 'set', stat: 'muzzleFlash', value: null },
    ]
  },

  // ========== SHELLHOLDER ==========
  {
    name: 'Shellholder', category: 'Shellholder', slot: 'Shellholder',
    directMounts: ['STEVENS_555', 'DOUBLEBARREL', 'TOZ34'], weightModifier: 0.7,
    modifiers: [{ op: 'mul', stat: 'recoilDelay', value: 0.60 }]
  },

  // ========== BARRELS ==========
  {
    name: 'DOUBLEBARREL_Barrel_Close', category: 'Barrel', slot: 'Barrel',
    directMounts: ['DOUBLEBARREL'], weightModifier: 3.0, note: 'Standard barrel'
  },
  {
    name: 'DOUBLEBARREL_Barrel_Open', category: 'Barrel', slot: 'Barrel',
    directMounts: ['DOUBLEBARREL'], weightModifier: 3.0
  },
  {
    name: 'DOUBLEBARREL_Barrel_Sawnoff_Close', category: 'Barrel', slot: 'Barrel',
    directMounts: ['DOUBLEBARREL'], weightModifier: 1.0, note: 'Sawn-off, replaces base barrel',
    modifiers: [
      { op: 'set', stat: 'aimTime', value: 30 },
      { op: 'set', stat: 'hitChance', value: 70 },
      { op: 'set', stat: 'projectileSpread', value: 2.0 },
      { op: 'set', stat: 'range', value: 15.0 },
    ]
  },
  {
    name: 'DOUBLEBARREL_Barrel_Sawnoff_Open', category: 'Barrel', slot: 'Barrel',
    directMounts: ['DOUBLEBARREL'], weightModifier: 1.0
  },
  {
    name: 'STEVENS_555_Barrel_Close', category: 'Barrel', slot: 'Barrel',
    directMounts: ['STEVENS_555'], weightModifier: 3.0
  },
  {
    name: 'STEVENS_555_Barrel_Open', category: 'Barrel', slot: 'Barrel',
    directMounts: ['STEVENS_555'], weightModifier: 3.0
  },
  {
    name: 'STEVENS_555_Barrel_Sawnoff_Close', category: 'Barrel', slot: 'Barrel',
    directMounts: ['STEVENS_555'], weightModifier: 1.0
  },
  {
    name: 'STEVENS_555_Barrel_Sawnoff_Open', category: 'Barrel', slot: 'Barrel',
    directMounts: ['STEVENS_555'], weightModifier: 1.0
  },
  {
    name: 'TOZ34_Barrel_Close', category: 'Barrel', slot: 'Barrel',
    directMounts: ['TOZ34'], weightModifier: 3.0
  },
  {
    name: 'TOZ34_Barrel_Open', category: 'Barrel', slot: 'Barrel',
    directMounts: ['TOZ34'], weightModifier: 3.0
  },
  {
    name: 'TOZ34_Barrel_Sawnoff_Close', category: 'Barrel', slot: 'Barrel',
    directMounts: ['TOZ34'], weightModifier: 1.0
  },
  {
    name: 'TOZ34_Barrel_Sawnoff_Open', category: 'Barrel', slot: 'Barrel',
    directMounts: ['TOZ34'], weightModifier: 1.0
  },

  // ========== BAYONETS ==========
  {
    name: 'K98_Bayonet_Attachment', category: 'Bayonet', slot: 'BayonetKnife',
    directMounts: ['M16A1', 'M16A2', 'M16A3', 'AR15', 'FAMAS', 'M14', 'M1_GARAND', 'G3', 'MOSIN', 'M1903', 'MOSSBERG_590', 'BENELLI_M4', 'TRENCHGUN', 'REMINGTON_870'], weightModifier: 1.0
  },
  {
    name: 'M5_Bayonet_Attachment', category: 'Bayonet', slot: 'BayonetKnife',
    directMounts: ['M16A1', 'M16A2', 'M16A3', 'AR15', 'FAMAS', 'M14', 'M1_GARAND', 'G3', 'MOSIN', 'M1903', 'MOSSBERG_590', 'BENELLI_M4', 'TRENCHGUN', 'REMINGTON_870'], weightModifier: 1.0
  },
  {
    name: 'M9_Bayonet_Attachment', category: 'Bayonet', slot: 'BayonetKnife',
    directMounts: ['M16A1', 'M16A2', 'M16A3', 'AR15', 'FAMAS', 'M14', 'M1_GARAND', 'G3', 'MOSIN', 'M1903', 'MOSSBERG_590', 'BENELLI_M4', 'TRENCHGUN', 'REMINGTON_870'], weightModifier: 1.0
  },

  // ========== MOUNTS ==========
  { name: 'Picatinny_Rail_Up', category: 'Mount', slot: 'RailUp', weightModifier: 0.2 },
  { name: 'Picatinny_Rail_Down', category: 'Mount', slot: 'RailDown', weightModifier: 0.2 },
  { name: 'Picatinny_Rail_Left', category: 'Mount', slot: 'RailLeft', weightModifier: 0.2 },
  { name: 'Picatinny_Rail_Right', category: 'Mount', slot: 'RailRight', weightModifier: 0.2 },
  { name: 'AK_Mount', category: 'Mount', slot: 'RailUp', weightModifier: 0.2 },
  { name: 'Sniper_Mount', category: 'Mount', slot: 'RailUp', weightModifier: 0.2 },
  { name: 'Beretta_Mount', category: 'Mount', slot: 'RailUp', weightModifier: 0.2 },
  { name: 'Colt_Mount', category: 'Mount', slot: 'RailUp', weightModifier: 0.2 },
  { name: 'Heavy_Pistol_Rail', category: 'Mount', slot: 'RailUp', weightModifier: 0.2 },
  { name: 'AR_Muzzle_Mount_Device', category: 'Mount', slot: 'CanonMount', weightModifier: 0.5 },
  { name: 'AK_Muzzle_Mount_Device', category: 'Mount', slot: 'CanonMount', weightModifier: 0.5 },
  { name: 'Pistol_Muzzle_Mount_Device', category: 'Mount', slot: 'CanonMount', weightModifier: 0.5 },
  { name: '45_Muzzle_Mount_Device', category: 'Mount', slot: 'CanonMount', weightModifier: 0.5 },
];