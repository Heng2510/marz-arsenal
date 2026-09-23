import type { AmmoFamily } from './ammo';

export type GunCategory = 'Pistol' | 'Revolver' | 'SMG' | 'Rifle' | 'Shotgun' | 'Sniper' | 'LMG' | 'Launcher';

export interface Gun {
  name: string;
  category: GunCategory;
  ammoFamilies: AmmoFamily[];
  dmgMin: number; dmgMax: number;
  crit: number; critDmg: number;
  hitChance: number; aimTime: number;
  range: number; noise: number;
  fireModes: string; mag: number; weight: number;
  best?: boolean; note?: string;
  // Mounts the gun can accept, derived from UniversalAttachments.lua + rails.txt
  mounts?: string[];
}

export const GUNS: Gun[] = [
  // === PISTOLS ===
  { name: 'M92FS', category: 'Pistol', ammoFamilies: ['9x19'], dmgMin: 0.5, dmgMax: 1.0, crit: 25, critDmg: 4.0, hitChance: 50, aimTime: 20, range: 20, noise: 100, fireModes: 'Single', mag: 15, weight: 0.90, best: true, mounts: ['Beretta_Mount'] },
  { name: 'M93R', category: 'Pistol', ammoFamilies: ['9x19'], dmgMin: 0.6, dmgMax: 0.9, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 25, range: 20, noise: 100, fireModes: 'Burst/Single', mag: 18, weight: 0.94, mounts: ['Beretta_Mount'] },
  { name: 'HIPOWER', category: 'Pistol', ammoFamilies: ['9x19'], dmgMin: 0.8, dmgMax: 1.1, crit: 15, critDmg: 4.0, hitChance: 40, aimTime: 30, range: 20, noise: 120, fireModes: 'Single', mag: 13, weight: 0.62, mounts: ['Beretta_Mount'] },
  { name: 'P226', category: 'Pistol', ammoFamilies: ['9x19'], dmgMin: 0.8, dmgMax: 1.1, crit: 15, critDmg: 4.0, hitChance: 40, aimTime: 30, range: 20, noise: 120, fireModes: 'Single', mag: 10, weight: 0.90, mounts: ['Beretta_Mount'] },
  { name: 'M1911', category: 'Pistol', ammoFamilies: ['45'], dmgMin: 0.9, dmgMax: 1.2, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 25, range: 20, noise: 120, fireModes: 'Single', mag: 7, weight: 1.10, mounts: ['Colt_Mount'] },
  { name: 'USP', category: 'Pistol', ammoFamilies: ['45'], dmgMin: 1.0, dmgMax: 1.1, crit: 22, critDmg: 4.0, hitChance: 50, aimTime: 30, range: 20, noise: 120, fireModes: 'Single', mag: 12, weight: 0.74, mounts: ['Colt_Mount'] },
  { name: 'DEAGLE', category: 'Pistol', ammoFamilies: ['50'], dmgMin: 1.6, dmgMax: 2.0, crit: 30, critDmg: 4.0, hitChance: 35, aimTime: 40, range: 20, noise: 180, fireModes: 'Single', mag: 8, weight: 2.00, best: true, mounts: ['Heavy_Pistol_Rail'] },
  { name: 'VP70M', category: 'Pistol', ammoFamilies: ['9x19'], dmgMin: 0.8, dmgMax: 0.9, crit: 30, critDmg: 4.0, hitChance: 35, aimTime: 40, range: 20, noise: 100, fireModes: 'Single/Burst', mag: 18, weight: 0.82 },
  { name: 'MP5K', category: 'Pistol', ammoFamilies: ['9x19'], dmgMin: 0.6, dmgMax: 1.0, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 25, range: 25, noise: 100, fireModes: 'Auto/Single', mag: 15, weight: 1.50, mounts: ['Picatinny_Rail_Up'] },
  { name: 'TEC9', category: 'Pistol', ammoFamilies: ['9x19'], dmgMin: 0.5, dmgMax: 1.0, crit: 25, critDmg: 4.0, hitChance: 50, aimTime: 20, range: 25, noise: 100, fireModes: 'Single', mag: 20, weight: 1.23 },
  { name: 'MAC10', category: 'Pistol', ammoFamilies: ['45'], dmgMin: 0.7, dmgMax: 1.1, crit: 25, critDmg: 4.0, hitChance: 40, aimTime: 25, range: 25, noise: 100, fireModes: 'Auto/Single', mag: 15, weight: 2.20 },

  // === REVOLVERS ===
  { name: 'SW629', category: 'Revolver', ammoFamilies: ['44'], dmgMin: 1.2, dmgMax: 1.8, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 50, range: 20, noise: 120, fireModes: 'Single', mag: 6, weight: 1.18, mounts: ['Heavy_Pistol_Rail'] },
  { name: 'PYTHON', category: 'Revolver', ammoFamilies: ['357', '38'], dmgMin: 1.0, dmgMax: 1.6, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 30, range: 20, noise: 120, fireModes: 'Single', mag: 6, weight: 1.20, best: true, mounts: ['Heavy_Pistol_Rail'] },
  { name: 'RHINO', category: 'Revolver', ammoFamilies: ['357', '38'], dmgMin: 0.95, dmgMax: 1.4, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 25, range: 20, noise: 100, fireModes: 'Single', mag: 6, weight: 1.10 },
  { name: 'MP412', category: 'Revolver', ammoFamilies: ['38', '357'], dmgMin: 0.8, dmgMax: 1.0, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 25, range: 20, noise: 60, fireModes: 'Single', mag: 5, weight: 0.90 },
  { name: 'COLT_SINGLE', category: 'Revolver', ammoFamilies: ['45'], dmgMin: 0.9, dmgMax: 1.2, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 20, range: 20, noise: 100, fireModes: 'Single', mag: 6, weight: 1.04 },
  { name: 'DETECTIVE_38', category: 'Revolver', ammoFamilies: ['38', '357'], dmgMin: 0.7, dmgMax: 0.9, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 25, range: 20, noise: 60, fireModes: 'Single', mag: 6, weight: 0.90 },

  // === SMG ===
  { name: 'THOMPSON', category: 'SMG', ammoFamilies: ['45'], dmgMin: 1.0, dmgMax: 1.6, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 40, range: 30, noise: 150, fireModes: 'Auto/Single', mag: 30, weight: 4.00 },
  { name: 'MP5', category: 'SMG', ammoFamilies: ['9x19'], dmgMin: 1.0, dmgMax: 1.6, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 40, range: 30, noise: 150, fireModes: 'Auto/Single', mag: 30, weight: 2.00, best: true, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'MP5SD', category: 'SMG', ammoFamilies: ['9x19'], dmgMin: 0.8, dmgMax: 1.3, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 40, range: 25, noise: 50, fireModes: 'Auto/Single', mag: 30, weight: 2.10, best: true, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'MP5A2', category: 'SMG', ammoFamilies: ['9x19'], dmgMin: 1.0, dmgMax: 1.6, crit: 30, critDmg: 4.0, hitChance: 50, aimTime: 40, range: 30, noise: 150, fireModes: 'Auto/Single', mag: 30, weight: 2.00, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },

  // === RIFLES ===
  { name: 'M16A1', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 1.0, dmgMax: 1.8, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 40, range: 50, noise: 175, fireModes: 'Auto/Single', mag: 30, weight: 2.89, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down'] },
  { name: 'M16A2', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 1.0, dmgMax: 1.8, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 40, range: 50, noise: 175, fireModes: 'Burst/Single', mag: 30, weight: 3.40, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'M16A2_M203', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 1.0, dmgMax: 1.8, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 40, range: 50, noise: 175, fireModes: 'Burst/Single', mag: 30, weight: 4.70, mounts: ['Picatinny_Rail_Up'] },
  { name: 'M16A3', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 1.0, dmgMax: 1.8, crit: 20, critDmg: 4.0, hitChance: 50, aimTime: 40, range: 50, noise: 175, fireModes: 'Auto/Single', mag: 30, weight: 3.40, best: true, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'M4A1', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 1.0, dmgMax: 1.4, crit: 18, critDmg: 3.5, hitChance: 50, aimTime: 15, range: 40, noise: 145, fireModes: 'Auto/Burst/Single', mag: 30, weight: 2.92, best: true, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'CAR15', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 0.9, dmgMax: 1.5, crit: 18, critDmg: 3.5, hitChance: 50, aimTime: 20, range: 40, noise: 145, fireModes: 'Auto/Single', mag: 30, weight: 2.43, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'XM177', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 0.9, dmgMax: 1.5, crit: 18, critDmg: 3.5, hitChance: 50, aimTime: 20, range: 40, noise: 145, fireModes: 'Auto/Single', mag: 30, weight: 2.43, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'AR15', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 0.8, dmgMax: 1.6, crit: 20, critDmg: 3.5, hitChance: 50, aimTime: 30, range: 50, noise: 150, fireModes: 'Single', mag: 30, weight: 2.90, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down'] },
  { name: 'MINI_14', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 1.1, dmgMax: 1.7, crit: 25, critDmg: 4.2, hitChance: 40, aimTime: 45, range: 50, noise: 170, fireModes: 'Single', mag: 30, weight: 2.80, mounts: ['Picatinny_Rail_Up'] },
  { name: 'FNC', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 1.1, dmgMax: 1.7, crit: 25, critDmg: 4.2, hitChance: 40, aimTime: 45, range: 50, noise: 170, fireModes: 'Auto/Single', mag: 30, weight: 3.80, mounts: ['Picatinny_Rail_Up'] },
  { name: 'FAMAS', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 1.1, dmgMax: 1.7, crit: 25, critDmg: 4.2, hitChance: 40, aimTime: 45, range: 50, noise: 170, fireModes: 'Auto/Single', mag: 30, weight: 3.61, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down'] },
  { name: 'G36C', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 0.9, dmgMax: 1.4, crit: 25, critDmg: 3.5, hitChance: 50, aimTime: 15, range: 40, noise: 145, fireModes: 'Auto/Single', mag: 30, weight: 2.82, mounts: ['Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'G36', category: 'Rifle', ammoFamilies: ['556x45', '223'], dmgMin: 0.9, dmgMax: 1.4, crit: 25, critDmg: 3.5, hitChance: 50, aimTime: 15, range: 50, noise: 145, fireModes: 'Auto/Single', mag: 30, weight: 3.63, mounts: ['Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },

  { name: 'AK74', category: 'Rifle', ammoFamilies: ['545x39'], dmgMin: 1.3, dmgMax: 1.9, crit: 30, critDmg: 6.0, hitChance: 45, aimTime: 55, range: 50, noise: 200, fireModes: 'Auto/Single', mag: 30, weight: 3.07, best: true, mounts: ['AK_Mount'] },
  { name: 'AKS74U', category: 'Rifle', ammoFamilies: ['545x39'], dmgMin: 1.0, dmgMax: 1.6, crit: 25, critDmg: 3.0, hitChance: 30, aimTime: 25, range: 40, noise: 200, fireModes: 'Auto/Single', mag: 30, weight: 2.70, mounts: ['AK_Mount', 'Picatinny_Rail_Down'] },
  { name: 'AK47', category: 'Rifle', ammoFamilies: ['762x39'], dmgMin: 1.5, dmgMax: 1.8, crit: 25, critDmg: 6.0, hitChance: 50, aimTime: 60, range: 50, noise: 200, fireModes: 'Auto/Single', mag: 30, weight: 3.47, best: true, mounts: ['AK_Mount'] },
  { name: 'ASVAL', category: 'Rifle', ammoFamilies: ['9x39'], dmgMin: 0.7, dmgMax: 1.4, crit: 20, critDmg: 4.5, hitChance: 50, aimTime: 35, range: 45, noise: 50, fireModes: 'Auto/Single', mag: 30, weight: 2.50, best: true, mounts: ['AK_Mount', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'SKS', category: 'Rifle', ammoFamilies: ['762x39'], dmgMin: 1.2, dmgMax: 2.0, crit: 30, critDmg: 4.0, hitChance: 50, aimTime: 50, range: 50, noise: 170, fireModes: 'Single', mag: 10, weight: 3.85 },

  { name: 'M14', category: 'Rifle', ammoFamilies: ['762x51', '308'], dmgMin: 1.2, dmgMax: 2.2, crit: 40, critDmg: 4.5, hitChance: 50, aimTime: 60, range: 60, noise: 200, fireModes: 'Single', mag: 20, weight: 4.20, best: true, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down'] },
  { name: 'M1_GARAND', category: 'Rifle', ammoFamilies: ['3006'], dmgMin: 1.5, dmgMax: 2.5, crit: 50, critDmg: 6.0, hitChance: 50, aimTime: 65, range: 60, noise: 220, fireModes: 'Single', mag: 8, weight: 4.30, best: true },
  { name: 'FAL', category: 'Rifle', ammoFamilies: ['762x51', '308'], dmgMin: 1.3, dmgMax: 1.8, crit: 30, critDmg: 5.0, hitChance: 50, aimTime: 65, range: 60, noise: 190, fireModes: 'Single/Auto', mag: 20, weight: 4.25, best: true, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'G3', category: 'Rifle', ammoFamilies: ['762x51', '308'], dmgMin: 1.6, dmgMax: 1.8, crit: 50, critDmg: 5.0, hitChance: 50, aimTime: 65, range: 60, noise: 190, fireModes: 'Single/Auto', mag: 20, weight: 4.10, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },

  // === SNIPERS ===
  { name: 'SVD', category: 'Sniper', ammoFamilies: ['762x54'], dmgMin: 1.2, dmgMax: 2.0, crit: 30, critDmg: 4.0, hitChance: 50, aimTime: 50, range: 60, noise: 170, fireModes: 'Single', mag: 10, weight: 4.30, best: true, mounts: ['AK_Mount', 'Picatinny_Rail_Down'] },
  { name: 'PSG1', category: 'Sniper', ammoFamilies: ['762x51', '308'], dmgMin: 1.2, dmgMax: 2.0, crit: 30, critDmg: 4.0, hitChance: 50, aimTime: 50, range: 60, noise: 170, fireModes: 'Single', mag: 5, weight: 4.50, best: true, mounts: ['Picatinny_Rail_Up', 'Picatinny_Rail_Down'] },
  { name: 'MOSIN', category: 'Sniper', ammoFamilies: ['762x54'], dmgMin: 1.9, dmgMax: 2.2, crit: 30, critDmg: 5.0, hitChance: 60, aimTime: 70, range: 60, noise: 220, fireModes: 'Bolt', mag: 5, weight: 3.40, best: true, mounts: ['Sniper_Mount'] },
  { name: 'M24', category: 'Sniper', ammoFamilies: ['762x51', '308'], dmgMin: 1.7, dmgMax: 2.0, crit: 35, critDmg: 4.0, hitChance: 55, aimTime: 65, range: 60, noise: 220, fireModes: 'Bolt', mag: 5, weight: 5.30, best: true, mounts: ['Picatinny_Rail_Up'] },
  { name: 'M1903', category: 'Sniper', ammoFamilies: ['3006'], dmgMin: 1.9, dmgMax: 2.2, crit: 30, critDmg: 5.0, hitChance: 60, aimTime: 70, range: 60, noise: 220, fireModes: 'Bolt', mag: 5, weight: 3.90, best: true, mounts: ['Sniper_Mount'] },
  { name: 'REMINGTON_700', category: 'Sniper', ammoFamilies: ['762x51', '308'], dmgMin: 1.5, dmgMax: 1.8, crit: 30, critDmg: 4.0, hitChance: 55, aimTime: 65, range: 60, noise: 220, fireModes: 'Bolt', mag: 5, weight: 5.30, best: true, mounts: ['Sniper_Mount'] },
  { name: 'MODEL_70', category: 'Sniper', ammoFamilies: ['556x45', '223'], dmgMin: 1.3, dmgMax: 1.5, crit: 35, critDmg: 4.0, hitChance: 55, aimTime: 50, range: 60, noise: 220, fireModes: 'Bolt', mag: 5, weight: 5.30, mounts: ['Sniper_Mount'] },

  // === LEVER ===
  { name: 'W1894', category: 'Rifle', ammoFamilies: ['3030'], dmgMin: 1.0, dmgMax: 1.4, crit: 30, critDmg: 4.0, hitChance: 55, aimTime: 35, range: 50, noise: 150, fireModes: 'Lever', mag: 6, weight: 2.95, mounts: ['Picatinny_Rail_Up'] },
  { name: 'W1873', category: 'Rifle', ammoFamilies: ['357', '38'], dmgMin: 0.8, dmgMax: 1.3, crit: 30, critDmg: 4.0, hitChance: 55, aimTime: 35, range: 50, noise: 150, fireModes: 'Lever', mag: 9, weight: 3.29, mounts: ['Picatinny_Rail_Up'] },
  { name: 'W1873_CARBINE', category: 'Rifle', ammoFamilies: ['357', '38'], dmgMin: 0.8, dmgMax: 1.3, crit: 30, critDmg: 4.0, hitChance: 55, aimTime: 35, range: 30, noise: 150, fireModes: 'Lever', mag: 6, weight: 2.29 },
  { name: 'M1895', category: 'Rifle', ammoFamilies: ['4570'], dmgMin: 1.8, dmgMax: 2.5, crit: 35, critDmg: 3.5, hitChance: 50, aimTime: 50, range: 50, noise: 175, fireModes: 'Lever', mag: 6, weight: 3.06, best: true, mounts: ['Picatinny_Rail_Up'] },

  // === SHOTGUNS ===
  { name: 'MOSSBERG_590', category: 'Shotgun', ammoFamilies: ['12g'], dmgMin: 1.5, dmgMax: 2.2, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 20, noise: 200, fireModes: 'Pump', mag: 5, weight: 2.50, best: true, mounts: ['Picatinny_Rail_Up'] },
  { name: 'TRENCHGUN', category: 'Shotgun', ammoFamilies: ['12g'], dmgMin: 1.5, dmgMax: 2.2, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 20, noise: 200, fireModes: 'Pump', mag: 5, weight: 3.20, best: true },
  { name: 'REMINGTON_870', category: 'Shotgun', ammoFamilies: ['12g'], dmgMin: 1.5, dmgMax: 2.2, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 20, noise: 200, fireModes: 'Pump', mag: 5, weight: 3.20, best: true, mounts: ['Picatinny_Rail_Up'] },
  { name: 'BENELLI_M4', category: 'Shotgun', ammoFamilies: ['12g'], dmgMin: 1.5, dmgMax: 2.2, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 20, noise: 200, fireModes: 'Semi', mag: 7, weight: 3.82, best: true, mounts: ['Picatinny_Rail_Up'] },
  { name: 'SPAS12', category: 'Shotgun', ammoFamilies: ['12g'], dmgMin: 1.5, dmgMax: 2.2, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 20, noise: 200, fireModes: 'Semi', mag: 7, weight: 4.40 },
  { name: 'AA12', category: 'Shotgun', ammoFamilies: ['12g'], dmgMin: 1.5, dmgMax: 2.2, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 20, noise: 200, fireModes: 'Auto', mag: 8, weight: 4.50, best: true, mounts: ['Picatinny_Rail_Down', 'Picatinny_Rail_Left', 'Picatinny_Rail_Right'] },
  { name: 'STEVENS_555', category: 'Shotgun', ammoFamilies: ['12g'], dmgMin: 1.5, dmgMax: 2.2, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 20, noise: 200, fireModes: 'Double', mag: 2, weight: 2.90 },
  { name: 'DOUBLEBARREL', category: 'Shotgun', ammoFamilies: ['12g'], dmgMin: 1.5, dmgMax: 2.2, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 20, noise: 200, fireModes: 'Double', mag: 2, weight: 1.00 },
  { name: 'TOZ34', category: 'Shotgun', ammoFamilies: ['12g'], dmgMin: 1.5, dmgMax: 2.2, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 20, noise: 200, fireModes: 'Double', mag: 2, weight: 3.00 },
  { name: 'W1887', category: 'Shotgun', ammoFamilies: ['12g'], dmgMin: 1.6, dmgMax: 1.8, crit: 60, critDmg: 8.0, hitChance: 65, aimTime: 35, range: 20, noise: 175, fireModes: 'Lever', mag: 5, weight: 3.60, mounts: ['Picatinny_Rail_Up'] },

  // === LMG ===
  { name: 'M60', category: 'LMG', ammoFamilies: ['762x51', '308'], dmgMin: 1.6, dmgMax: 2.0, crit: 40, critDmg: 3.5, hitChance: 20, aimTime: 70, range: 60, noise: 230, fireModes: 'Auto/Single', mag: 100, weight: 7.50, best: true },
  { name: 'BAR', category: 'LMG', ammoFamilies: ['3006'], dmgMin: 1.2, dmgMax: 1.8, crit: 35, critDmg: 3.5, hitChance: 20, aimTime: 70, range: 60, noise: 230, fireModes: 'Auto/Single', mag: 20, weight: 5.00, best: true },

  // === LAUNCHER ===
  { name: 'M79', category: 'Launcher', ammoFamilies: ['40mm'], dmgMin: 1.8, dmgMax: 2.0, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 10, noise: 300, fireModes: 'Single', mag: 1, weight: 2.70, best: true },
  { name: 'M203_Weapon', category: 'Launcher', ammoFamilies: ['40mm'], dmgMin: 1.8, dmgMax: 2.0, crit: 70, critDmg: 12.0, hitChance: 65, aimTime: 40, range: 10, noise: 300, fireModes: 'Single', mag: 1, weight: 2.70 },
];