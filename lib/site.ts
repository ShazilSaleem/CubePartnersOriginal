export const site = {
  name: "Cube Partner",
  legalName: "Cube Partner Limited",
  companyNumber: "15697313",
  email: "join@cubeandpartners.co.uk",
  phone: "+44 161 55 22 66",
  phoneHref: "tel:+44161552266",
  whatsappDisplay: "+44 751 32 30 00",
  whatsapp: "https://wa.me/447513230000",
  addressLines: ["First Floor, Parkway Two", "Manchester, M14 7LU"],
  footerAddress: "Parkway Two, Manchester, M14 7LU",
  // Parkway Two, Princess Road, Manchester. Used to centre the contact page map.
  coordinates: [53.4556, -2.2468] as [number, number],
  mapsUrl: "https://www.openstreetmap.org/?mlat=53.4556&mlon=-2.2468#map=15/53.4556/-2.2468",
};

export type NavItem = { label: string; href: string };

export const schemeLinks: NavItem[] = [
  { label: "Partner scheme", href: "/partner-scheme" },
  { label: "Introducer scheme", href: "/introducer-scheme" },
];

// Sister brands in the "Our Network" menu, footer and network band.
export const networkSites = [
  {
    name: "Cube Accountants",
    text: "Expert accounting support for businesses and individuals.",
    logo: "/images/cube-accountants-red.svg",
    href: "https://www.cubeaccountants.com",
  },
  {
    name: "Cube Academy",
    text: "Learning and development for the next generation of professionals.",
    logo: "/images/cube-academy-blue.svg",
    href: "https://www.cubeacademy.co.uk",
  },
];
