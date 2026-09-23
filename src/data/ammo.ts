export type AmmoColor =
  | '9x19' | '45' | '50' | '38' | '357' | '44'
  | '556x45' | '223' | '545x39' | '762x39' | '762x51' | '762x54' | '3006' | '308' | '9x39'
  | '12g' | '40mm';

export const AMMO_INFO: Record<AmmoColor, { label: string; color: string }> = {
  '9x19':  { label: '9×19mm Parabellum', color: 'bg-yellow-200 border-yellow-500' },
  '45':    { label: '.45 ACP',           color: 'bg-orange-200 border-orange-500' },
  '50':    { label: '.50 AE',            color: 'bg-red-200 border-red-600' },
  '38':    { label: '.38 Special',       color: 'bg-amber-100 border-amber-400' },
  '357':   { label: '.357 Magnum',       color: 'bg-orange-300 border-orange-600' },
  '44':    { label: '.44 Magnum',        color: 'bg-red-300 border-red-700' },
  '556x45':{ label: '5.56×45mm NATO',    color: 'bg-lime-200 border-lime-600' },
  '223':   { label: '.223 Remington',    color: 'bg-green-200 border-green-600' },
  '545x39':{ label: '5.45×39mm Soviet',  color: 'bg-emerald-200 border-emerald-600' },
  '762x39':{ label: '7.62×39mm Soviet',  color: 'bg-teal-200 border-teal-600' },
  '762x51':{ label: '7.62×51mm NATO',    color: 'bg-cyan-200 border-cyan-600' },
  '762x54':{ label: '7.62×54mmR',        color: 'bg-sky-200 border-sky-600' },
  '3006':  { label: '.30-06 Springfield',color: 'bg-blue-200 border-blue-600' },
  '308':   { label: '.308 Winchester',   color: 'bg-indigo-200 border-indigo-600' },
  '9x39':  { label: '9×39mm',            color: 'bg-purple-200 border-purple-600' },
  '12g':   { label: '12 Gauge',          color: 'bg-rose-200 border-rose-600' },
  '40mm':  { label: '40mm Grenade',      color: 'bg-fuchsia-200 border-fuchsia-600' },
};