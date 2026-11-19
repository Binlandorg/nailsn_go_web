const unsplash = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const photos = {
  pinkNails: unsplash('photo-1604902396830-aca29e19b067', 1100),
  loveNails: unsplash('photo-1519014816548-bf5fe059798b'),
  nudeManicure: unsplash('photo-1610992015732-2449b76344bc'),
  gelProcess: unsplash('photo-1632345031435-8727f6897d53'),
  lilacGlitter: unsplash('photo-1607779097040-26e80aa78e66'),
  colorArt: unsplash('photo-1571290274554-6a2eaa771e5f'),
  pedicure: unsplash('photo-1519415510236-718bdfcd89c8'),
  softFrench: unsplash('photo-1587729927069-ef3b7a5ab9b4'),
  darkChic: unsplash('photo-1604654894610-df63bc536371'),
  goldChrome: unsplash('photo-1604654894611-6973b376cbde'),
  polishBottles: unsplash('photo-1599948128020-9a44505b0d1b'),
  pinkFlatlay: unsplash('photo-1631214524020-7e18db9a8f92'),
  brushes: unsplash('photo-1516975080664-ed2fc6a32937'),
} as const
