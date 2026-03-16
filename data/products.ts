export type Product = {
  id: string;
  slug: string;
  name: string;
  priceFCFA: number;
  pricePrefix?: string;
  category: 'Apaisement & Versets' | 'Défis & Spiritualité' | 'Coin des Enfants' | "Papeterie & Dou'as";
  audience: 'Enfants' | 'Adultes' | 'Tous';
  description: string;
  images: string[];
};

export function formatPrice(product: Pick<Product, 'priceFCFA' | 'pricePrefix'>): string {
  const price = `${product.priceFCFA.toLocaleString('fr-FR')} FCFA`;
  return product.pricePrefix ? `${product.pricePrefix} ${price}` : price;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'bocal-islamique',
    name: "BOCAL ISLAMIQUE (CONTIENT DES VERSETS DU QURAN)",
    priceFCFA: 5000,
    category: 'Apaisement & Versets',
    audience: 'Tous',
    description: "Un magnifique bocal contenant des versets du Quran pour apaiser le cœur et se rappeler d'Allah au quotidien.",
    images: [
      '/products/bocal-1.jpg',
      '/products/bocal-2.jpg',
      '/products/bocal-3.jpg',
      '/products/bocal-4.jpg',
      '/products/bocal-5.jpg',
      '/products/bocal-6.jpg',
      '/products/bocal-7.jpg',
    ]
  },
  {
    id: '2',
    slug: 'boite-defis-tasbih',
    name: "BOÎTE À DÉFIS(30 CARTES - 30 DÉFIS)",
    priceFCFA: 5000,
    category: 'Défis & Spiritualité',
    audience: 'Tous',
    description: "Relevez un défi spirituel chaque jour pendant 30 jours et bien au delà. Inclus un tasbih au choix pour vos invocations.",
    images: [
      '/products/defis-1.jpg',
      '/products/defis-2.jpg',
      '/products/defis-3.jpg',
      '/products/defis-4.jpg',
      '/products/defis-5.jpg',
    ]
  },
  {
    id: '3',
    slug: 'coffret-99-noms',
    name: "COFFRET 99 NOMS D'ALLAH + NOTICE",
    priceFCFA: 22000,
    category: 'Défis & Spiritualité',
    audience: 'Tous',
    description: "Apprenez et méditez sur les 99 Noms d'Allah (Asmā'ul Husnā) avec ce coffret premium. Inclus une notice de référence pour l'étude : numérotation, écriture arabe et phonétique. Idéal pour offrir.",
    images: [
      '/products/99noms-4.jpg',
      '/products/99noms-1.jpg',
      '/products/99noms-2.jpg',
      '/products/99noms-3.jpg',
    ]
  },
  {
    id: '4',
    slug: 'cartes-invocations-enfants',
    name: "CARTES D'INVOCATIONS POUR ENFANTS",
    priceFCFA: 4000,
    category: 'Coin des Enfants',
    audience: 'Enfants',
    description: "Un support éducatif conçu pour aider les enfants à apprendre et mémoriser des invocations du quotidien.",
    images: [
      '/products/cartes-enfants-1.jpg',
      '/products/cartes-enfants-2.jpg',
      '/products/cartes-enfants-3.jpg',
      '/products/cartes-enfants-4.jpg',
      '/products/cartes-enfants-5.jpg',
    ]
  },
  {
    id: '5',
    slug: 'cartes-invocations-adultes',
    name: "CARTES D'INVOCATIONS POUR ADULTES",
    priceFCFA: 4500,
    category: "Papeterie & Dou'as",
    audience: 'Adultes',
    description: "Des cartes regroupant des invocations à réciter dans différentes situations du quotidien, pour garder le rappel d'Allah présent dans sa journée.",
    images: [
      '/products/cartes-adultes-1.jpg',
      '/products/cartes-adultes-2.jpg',
      '/products/cartes-adultes-3.jpg',
      '/products/cartes-adultes-4.jpg',
    ]
  },
  {
    id: '6',
    slug: 'coloriage-prophetes-1',
    name: "CAHIER DE COLORIAGE POUR ENFANTS - HISTOIRES DES PROPHÈTES (TOME 1)",
    priceFCFA: 6500,
    category: 'Coin des Enfants',
    audience: 'Enfants',
    description: "Un cahier de coloriage éducatif qui permet de découvrir les histoires de 5 prophètes : Adam, Idrīss, Nūḥ, Hūd et Ṣāliḥ 'alayhima salam. À travers les pages, les enfants apprennent leurs histoires tout en coloriant et découvrent les leçons importantes qu'elles contiennent. Un support simple pour apprendre tout en s'amusant.",
    images: [
      '/products/coloriage-1-cover.jpg',
      '/products/coloriage-1b.jpg',
      '/products/coloriage-1d.jpg',
      '/products/coloriage-1e.jpg',
      '/products/coloriage-1f.jpg',
      '/products/coloriage-1g.jpg',
      '/products/coloriage-1i.jpg',
      '/products/coloriage-1c.jpg',
      '/products/coloriage-1h.jpg',
      '/products/coloriage-1.jpg',
      '/products/coloriage-1j.jpg',
      '/products/coloriage-1k.jpg',
    ]
  },
  {
    id: '7',
    slug: 'coloriage-prophetes-2',
    name: "CAHIER DE COLORIAGE POUR ENFANTS - HISTOIRES DES PROPHÈTES (TOME 2)",
    priceFCFA: 6500,
    category: 'Coin des Enfants',
    audience: 'Enfants',
    description: "Un cahier de coloriage éducatif qui permet de découvrir les histoires de 5 prophètes : Ibrāhim, Lūṭ, Isma'īl, Ishāq et Ya'qūb 'alayhima salam. À travers les pages, les enfants apprennent leurs histoires tout en coloriant et découvrent les leçons importantes qu'elles contiennent. Un support simple pour apprendre tout en s'amusant.",
    images: [
      '/products/coloriage-2-cover.jpg',
      '/products/coloriage-2b.jpg',
      '/products/coloriage-2c.jpg',
      '/products/coloriage-2d.jpg',
      '/products/coloriage-2e.jpg',
      '/products/coloriage-2f.jpg',
      '/products/coloriage-2g.jpg',
      '/products/coloriage-2h.jpg',
      '/products/coloriage-2i.jpg',
      '/products/coloriage-2j.jpg',
      '/products/coloriage-2k.jpg',
      '/products/coloriage-2l.jpg',
      '/products/coloriage-2m.jpg',
      '/products/coloriage-2n.jpg',
      '/products/coloriage-2o.jpg',
    ]
  },
  {
    id: '8',
    slug: 'coloriage-prophetes-1-2',
    name: "CAHIER DE COLORIAGE POUR ENFANTS - HISTOIRES DES PROPHÈTES (TOME 1&2)",
    priceFCFA: 12000,
    category: 'Coin des Enfants',
    audience: 'Enfants',
    description: "Le pack complet des tomes 1 et 2 pour des heures d'apprentissage ludique.",
    images: [
      '/products/coloriage-pack-1.jpg',
      '/products/coloriage-pack-2.jpg',
      '/products/coloriage-pack-3.jpg',
    ]
  },
  {
    id: '10',
    slug: 'carnets-islamiques',
    name: "CARNETS ISLAMIQUES",
    priceFCFA: 5000,
    category: 'Défis & Spiritualité',
    audience: 'Tous',
    description: "Des carnets pensés pour accompagner ta spiritualité au quotidien : repentir, réflexion et invocation pour renforcer ta relation avec Allah. Disponibles en deux thèmes : \"Revenir à Allah — Le Repentir sincère (At-Tawbah)\" et \"Confier ses choix à Allah — La Prière de consultation (Salat al-Istikhara)\". Sur commande.",
    images: [
      '/products/carnets-1.jpg',
      '/products/carnets-2.jpg',
      '/products/carnets-3.jpg',
      '/products/carnets-4.jpg',
      '/products/carnets-5.jpg',
      '/products/carnets-6.jpg',
    ]
  },
  {
    id: '9',
    slug: 'fiche-rappel-tasbih',
    name: "FICHES DE RAPPEL + CARTE DHIKR + ZIKROMÈTRE",
    priceFCFA: 1500,
    pricePrefix: "À partir de",
    category: "Papeterie & Dou'as",
    audience: 'Tous',
    description: "Un ensemble complet pour nourrir votre rappel d'Allah au quotidien : fiche islamique \"Le Dhikr — une lumière pour le cœur\", fiches sur les 5 Piliers, les 25 Prophètes et les ablutions, accompagnées d'un finger counter pour compter vos invocations.",
    images: [
      '/products/fiche-rappel-1.jpg',
      '/products/fiche-rappel-2.jpg',
      '/products/fiche-rappel-3.jpg',
      '/products/fiche-rappel-4.jpg',
      '/products/fiche-rappel-5.jpg',
      '/products/fiche-rappel-6.jpg',
    ]
  },
];
