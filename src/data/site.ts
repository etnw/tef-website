// Single source for the values that appear in metadata, structured data, and the
// contact blocks, so they cannot drift between pages.

export const site = {
  name: 'The Engine Factory',
  url: 'https://theenginefactory.com',
  description:
    'The commercial engine for deep-tech companies. Pipeline, pricing, customer contracts, and the team to run it, for semiconductor and deep-tech businesses.',
  legalName: 'ETNW Consulting',
  founder: 'Etienne Winkelmuller',
  email: 'etienne.winkelmuller@theenginefactory.com',
  phone: '+49 89 55273295',
  // Digits only, for tel: hrefs and schema.org.
  phoneE164: '+498955273295',
  booking: 'https://zeeg.me/etiennewinkelmullerzeeg/introcall',
  founderLinkedin: 'https://www.linkedin.com/in/etiennewinkelmuller',
  // TODO: the LinkedIn *company* page URL has not been supplied. Brief section 7.1 wants
  // it in schema.org sameAs to stop data aggregators associating this domain with an
  // unrelated company. Add the URL here and it flows into the structured data.
  companyLinkedin: '' as string,
  address: {
    street: 'Sendlinger Strasse 29',
    postalCode: '80331',
    city: 'Munich',
    cityDe: 'München',
    country: 'Germany',
    countryCode: 'DE',
  },
  ogImage: '/og.png',
} as const;
