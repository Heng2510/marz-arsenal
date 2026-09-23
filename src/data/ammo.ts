// src/data/ammo.ts
// Ammo families grouped by caliber compatibility.
// Two rounds with the same casing dimensions are interchangeable in-game
// (e.g. .38 and .357, 5.56 and .223, 7.62 NATO and .308).
// The pill shown on each gun reflects what the gun can actually chamber,
// not just the "primary" family from Ammunition.lua.

export type AmmoFamily =
  | '9x19' | '45' | '50' | '38' | '357' | '44'
  | '556x45' | '223' | '545x39' | '762x39' | '762x51' | '308' | '762x54' | '3006' | '9x39' | '4570' | '3030'
  | '12g' | '40mm';

export interface AmmoInfo {
  label: string;      // Short label for pills
  long: string;       // Full name for tooltips
  color: string;      // CSS class in global.css (ammo-*)
  variants?: string[]; // Registered bullet variants in this family
}

export const AMMO_INFO: Record<AmmoFamily, AmmoInfo> = {
  '9x19': {
    label: '9x19', long: '9×19mm Parabellum', color: 'ammo-9x19',
    variants: ['9x19_Bullet', 'Base.Bullets9mm'],
  },
  '45': {
    label: '.45', long: '.45 ACP', color: 'ammo-45',
    variants: ['45_Bullet', 'Base.Bullets45'],
  },
  '50': {
    label: '.50', long: '.50 AE', color: 'ammo-50',
    variants: ['50_Bullet'],
  },
  '38': {
    label: '.38', long: '.38 Special', color: 'ammo-38',
    variants: ['38_Bullet', 'Base.Bullets38'],
  },
  '357': {
    label: '.357', long: '.357 Magnum (also chambers .38)', color: 'ammo-357',
    variants: ['357_Bullet', 'Base.Bullets357'],
  },
  '44': {
    label: '.44', long: '.44 Magnum', color: 'ammo-44',
    variants: ['44_Bullet', 'Base.Bullets44'],
  },
  '556x45': {
    label: '5.56', long: '5.56×45mm NATO', color: 'ammo-556x45',
    variants: [
      '556x45_Bullet',
      '556x45_Bullet_ArmorPiercing',
      '556x45_Bullet_HollowPoint',
      '556x45_Bullet_Overpressured',
      '556x45_Bullet_Subsonic',
      'Base.556Bullets',
    ],
  },
  '223': {
    label: '.223', long: '.223 Remington (5.56-compatible)', color: 'ammo-223',
    variants: ['223_Bullet'],
  },
  '545x39': {
    label: '5.45', long: '5.45×39mm Soviet', color: 'ammo-545x39',
    variants: ['545x39_Bullet'],
  },
  '762x39': {
    label: '7.62', long: '7.62×39mm Soviet', color: 'ammo-762x39',
    variants: ['762x39_Bullet'],
  },
  '762x51': {
    label: '7.62 N', long: '7.62×51mm NATO', color: 'ammo-762x51',
    variants: ['762x51_Bullet', 'Base.308Bullets'],
  },
  '308': {
    label: '.308', long: '.308 Winchester (7.62 NATO-compatible)', color: 'ammo-308',
    variants: ['308_Bullet'],
  },
  '762x54': {
    label: '7.62 R', long: '7.62×54mmR', color: 'ammo-762x54',
    variants: ['762x54_Bullet'],
  },
  '3006': {
    label: '.30-06', long: '.30-06 Springfield', color: 'ammo-3006',
    variants: ['3006_Bullet'],
  },
  '9x39': {
    label: '9x39', long: '9×39mm', color: 'ammo-9x39',
    variants: ['9x39_Bullet'],
  },
  '4570': {
    label: '.45-70', long: '.45-70 Government', color: 'ammo-4570',
    variants: ['4570_Bullet'],
  },
  '3030': {
    label: '.30-30', long: '.30-30 Winchester', color: 'ammo-3030',
    variants: ['3030_Bullet', 'Base.3030Bullets'],
  },
  '12g': {
    label: '12g', long: '12 Gauge', color: 'ammo-12g',
    variants: ['12Gauge_Shell_Buckshot', '12Gauge_Shell_Slug', 'Base.ShotgunShells'],
  },
  '40mm': {
    label: '40mm', long: '40mm Grenade', color: 'ammo-40mm',
    variants: ['40mm_Round_Buckshot', '40mm_Round_HE', '40mm_Round_Incendiary'],
  },
};