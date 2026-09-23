// src/data/gun-meta.ts
// Supplementary metadata for each gun. Anything not present here uses defaults in scoring.ts.

export interface GunMeta {
  reload?: number;          // Reload time in seconds (PZ default ~25)
  attachCount?: number;     // Number of usable attachment slots (rails + mounts combined)
  ammoRarity?: 1 | 2 | 3;   // 1 = common, 2 = uncommon, 3 = rare
  hasStock?: boolean;       // Folding or fixed stock
  hasBurst?: boolean;       // Burst-fire mode available
  hasBayonet?: boolean;     // Can mount a bayonet
  ergonomics?: 1 | 2 | 3;   // 1 = bulky, 3 = compact / agile
  note?: string;
}

export const GUN_META: Record<string, GunMeta> = {
  // === PISTOLS ===
  M92FS:   { reload: 30, attachCount: 6, ammoRarity: 1, ergonomics: 3, note: 'Many attachments, common 9mm' },
  M93R:    { reload: 30, attachCount: 4, ammoRarity: 1, hasBurst: true, ergonomics: 3 },
  HIPOWER: { reload: 30, attachCount: 6, ammoRarity: 1, ergonomics: 3 },
  P226:    { reload: 30, attachCount: 6, ammoRarity: 1, ergonomics: 3 },
  M1911:   { reload: 30, attachCount: 6, ammoRarity: 1, ergonomics: 3 },
  USP:     { reload: 30, attachCount: 6, ammoRarity: 1, ergonomics: 3 },
  DEAGLE:  { reload: 30, attachCount: 6, ammoRarity: 3, ergonomics: 2, note: '.50 AE is rare' },
  VP70M:   { reload: 30, attachCount: 2, ammoRarity: 1, hasStock: true, hasBurst: true, ergonomics: 3 },
  MP5K:    { reload: 30, attachCount: 2, ammoRarity: 1, ergonomics: 3 },
  TEC9:    { reload: 30, attachCount: 1, ammoRarity: 1, ergonomics: 3 },
  MAC10:   { reload: 30, attachCount: 3, ammoRarity: 1, hasStock: true, ergonomics: 2 },

  // === REVOLVERS ===
  SW629:        { reload: 30, attachCount: 5, ammoRarity: 2, ergonomics: 2 },
  PYTHON:       { reload: 30, attachCount: 5, ammoRarity: 2, ergonomics: 2 },
  RHINO:        { reload: 30, attachCount: 1, ammoRarity: 2, ergonomics: 3 },
  MP412:        { reload: 30, attachCount: 1, ammoRarity: 1, ergonomics: 3, note: '.38 is very common' },
  COLT_SINGLE:  { reload: 30, attachCount: 1, ammoRarity: 1, ergonomics: 2 },
  DETECTIVE_38: { reload: 30, attachCount: 1, ammoRarity: 1, ergonomics: 3 },

  // === SMG ===
  THOMPSON: { reload: 25, attachCount: 1, ammoRarity: 1, ergonomics: 1 },
  MP5:      { reload: 25, attachCount: 10, ammoRarity: 1, hasStock: true, ergonomics: 3, note: 'Most attachment options in class' },
  MP5SD:    { reload: 25, attachCount: 10, ammoRarity: 1, hasStock: true, ergonomics: 3, note: 'Integrated suppressor' },
  MP5A2:    { reload: 25, attachCount: 10, ammoRarity: 1, ergonomics: 3 },

  // === RIFLES ===
  M16A1: { reload: 25, attachCount: 8, ammoRarity: 1, hasBayonet: true, ergonomics: 2 },
  M16A2: { reload: 25, attachCount: 10, ammoRarity: 1, hasBurst: true, hasBayonet: true, ergonomics: 2 },
  M16A3: { reload: 25, attachCount: 10, ammoRarity: 1, hasBayonet: true, ergonomics: 2 },
  M4A1:  { reload: 25, attachCount: 10, ammoRarity: 1, hasStock: true, hasBurst: true, ergonomics: 3, note: 'Fastest aim, multi fire-mode' },
  CAR15: { reload: 25, attachCount: 8, ammoRarity: 1, hasStock: true, ergonomics: 3 },
  XM177: { reload: 25, attachCount: 8, ammoRarity: 1, hasStock: true, ergonomics: 3 },
  AR15:  { reload: 25, attachCount: 6, ammoRarity: 1, ergonomics: 2 },
  MINI_14:{ reload: 25, attachCount: 4, ammoRarity: 1, ergonomics: 2 },
  FNC:   { reload: 25, attachCount: 4, ammoRarity: 1, hasStock: true, ergonomics: 2 },
  FAMAS: { reload: 25, attachCount: 4, ammoRarity: 1, hasBayonet: true, ergonomics: 2 },
  G36C:  { reload: 25, attachCount: 8, ammoRarity: 1, hasStock: true, ergonomics: 3, note: 'Light, fast aim, high crit' },
  G36:   { reload: 25, attachCount: 8, ammoRarity: 1, hasStock: true, ergonomics: 3, note: 'Long variant, very stable' },
  AK74:  { reload: 25, attachCount: 3, ammoRarity: 2, ergonomics: 2, note: '5.45 ammo harder to find than 5.56' },
  AKS74U:{ reload: 25, attachCount: 4, ammoRarity: 2, hasStock: true, ergonomics: 3 },
  AK47:  { reload: 25, attachCount: 3, ammoRarity: 1, ergonomics: 2, note: 'Common 7.62x39, high per-shot damage' },
  ASVAL: { reload: 25, attachCount: 8, ammoRarity: 3, hasStock: true, ergonomics: 3, note: 'Rare 9x39, integrated suppressor' },
  SKS:   { reload: 25, attachCount: 1, ammoRarity: 1, hasBayonet: true, ergonomics: 2 },
  M14:   { reload: 25, attachCount: 8, ammoRarity: 2, hasBayonet: true, ergonomics: 2, note: 'Semi-auto DMR, low attachment needs' },
  M1_GARAND: { reload: 25, attachCount: 4, ammoRarity: 2, hasBayonet: true, ergonomics: 2, note: '.30-06 crit 50%' },
  FAL:   { reload: 25, attachCount: 10, ammoRarity: 2, ergonomics: 2 },
  G3:    { reload: 25, attachCount: 10, ammoRarity: 2, hasBayonet: true, ergonomics: 2 },

  // === SNIPERS ===
  SVD:   { reload: 25, attachCount: 10, ammoRarity: 2, hasStock: true, ergonomics: 2 },
  PSG1:  { reload: 25, attachCount: 10, ammoRarity: 2, ergonomics: 2 },
  MOSIN: { reload: 25, attachCount: 4, ammoRarity: 2, hasBayonet: true, ergonomics: 2 },
  M24:   { reload: 25, attachCount: 4, ammoRarity: 2, ergonomics: 2 },
  M1903: { reload: 25, attachCount: 4, ammoRarity: 2, hasBayonet: true, ergonomics: 2 },
  REMINGTON_700: { reload: 25, attachCount: 3, ammoRarity: 2, ergonomics: 2, note: 'Sling reduces weight' },
  MODEL_70: { reload: 25, attachCount: 3, ammoRarity: 1, ergonomics: 2, note: '.223 common' },

  // === LEVER ===
  W1894:         { reload: 25, attachCount: 1, ammoRarity: 2, ergonomics: 2 },
  W1873:         { reload: 25, attachCount: 1, ammoRarity: 2, ergonomics: 2 },
  W1873_CARBINE: { reload: 25, attachCount: 0, ammoRarity: 2, ergonomics: 3 },
  M1895:         { reload: 25, attachCount: 1, ammoRarity: 3, ergonomics: 2, note: '.45-70 highest damage in lever class' },

  // === SHOTGUNS ===
  MOSSBERG_590:  { reload: 25, attachCount: 5, ammoRarity: 1, hasBayonet: true, ergonomics: 2 },
  TRENCHGUN:     { reload: 25, attachCount: 0, ammoRarity: 1, hasBayonet: true, ergonomics: 2 },
  REMINGTON_870: { reload: 25, attachCount: 5, ammoRarity: 1, hasBayonet: true, ergonomics: 2 },
  BENELLI_M4:    { reload: 25, attachCount: 5, ammoRarity: 1, hasBayonet: true, ergonomics: 2, note: 'Semi-auto' },
  SPAS12:        { reload: 25, attachCount: 0, ammoRarity: 1, hasStock: true, ergonomics: 2 },
  AA12:          { reload: 25, attachCount: 4, ammoRarity: 1, ergonomics: 1, note: 'Full-auto shotgun' },
  STEVENS_555:   { reload: 25, attachCount: 1, ammoRarity: 1, ergonomics: 3 },
  DOUBLEBARREL:  { reload: 25, attachCount: 1, ammoRarity: 1, ergonomics: 3 },
  TOZ34:         { reload: 25, attachCount: 1, ammoRarity: 1, ergonomics: 3 },
  W1887:         { reload: 25, attachCount: 1, ammoRarity: 1, ergonomics: 2 },

  // === LMG ===
  M60: { reload: 25, attachCount: 0, ammoRarity: 2, ergonomics: 1, note: '100 rounds, integrated bipod' },
  BAR: { reload: 25, attachCount: 0, ammoRarity: 2, ergonomics: 1, note: 'Integrated bipod' },

  // === LAUNCHER ===
  M79:         { reload: 25, attachCount: 0, ammoRarity: 2, ergonomics: 2 },
  M203_Weapon: { reload: 25, attachCount: 0, ammoRarity: 2, ergonomics: 2 },
};