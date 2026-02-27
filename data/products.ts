export type Product = {
  id: string;
  slug: string;
  name: string;
  priceFCFA: number;
  category: string;
  audience: 'Enfants' | 'Adultes' | 'Tous';
  description: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: '1',
    slug: 'bocal-islamique',
    name: "BOCAL ISLAMIQUE (CONTIENT DES VERSETS DU QURAN)",
    priceFCFA: 5000,
    category: 'Rappels',
    audience: 'Tous',
    description: "Un magnifique bocal contenant des versets du Coran pour apaiser le cœur et se rappeler d'Allah au quotidien.",
    images: ['/products/bocal-1.jpg']
  },
  {
    id: '2',
    slug: 'boite-defis-tasbih',
    name: "BOÎTE À DÉFIS + TASBIH (30 CARTES - 30 DÉFIS)",
    priceFCFA: 5000,
    category: 'Coffrets',
    audience: 'Tous',
    description: "Relevez un défi spirituel chaque jour pendant 30 jours. Inclus un tasbih pour vos invocations.",
    images: ['/products/defis-1.jpg']
  },
  {
    id: '3',
    slug: 'coffret-99-noms',
    name: "COFFRET 99 NOMS D'ALLAH + NOTICE",
    priceFCFA: 22000,
    category: 'Coffrets',
    audience: 'Tous',
    description: "Apprenez et méditez sur les 99 Noms d'Allah avec ce coffret premium. Idéal pour offrir.",
    images: ['/products/99noms-1.jpg']
  },
  {
    id: '4',
    slug: 'cartes-invocations-enfants',
    name: "CARTES D'INVOCATIONS POUR ENFANTS",
    priceFCFA: 4000,
    category: 'Cartes',
    audience: 'Enfants',
    description: "Des cartes colorées et ludiques pour apprendre les invocations quotidiennes aux enfants.",
    images: ['/products/cartes-enfants-1.jpg']
  },
  {
    id: '5',
    slug: 'cartes-invocations-adultes',
    name: "CARTES D'INVOCATIONS POUR ADULTES",
    priceFCFA: 4500,
    category: 'Cartes',
    audience: 'Adultes',
    description: "Un set de cartes élégantes regroupant les invocations essentielles du musulman.",
    images: ['/products/cartes-adultes-1.jpg']
  },
  {
    id: '6',
    slug: 'coloriage-prophetes-1',
    name: "CAHIER DE COLORIAGE POUR ENFANTS - HISTOIRES DES PROPHÈTES (TOME 1)",
    priceFCFA: 6000,
    category: 'Enfants',
    audience: 'Enfants',
    description: "Découvrez l'histoire des Prophètes à travers des dessins adaptés aux enfants. Tome 1.",
    images: ['/products/coloriage-1.jpg']
  },
  {
    id: '7',
    slug: 'coloriage-prophetes-2',
    name: "CAHIER DE COLORIAGE POUR ENFANTS - HISTOIRES DES PROPHÈTES (TOME 2)",
    priceFCFA: 6000,
    category: 'Enfants',
    audience: 'Enfants',
    description: "La suite des histoires des Prophètes en coloriage. Tome 2.",
    images: ['/products/coloriage-2.jpg']
  },
  {
    id: '8',
    slug: 'coloriage-prophetes-1-2',
    name: "CAHIER DE COLORIAGE POUR ENFANTS - HISTOIRES DES PROPHÈTES (TOME 1&2)",
    priceFCFA: 12000,
    category: 'Enfants',
    audience: 'Enfants',
    description: "Le pack complet des tomes 1 et 2 pour des heures d'apprentissage ludique.",
    images: ['/products/coloriage-pack-1.jpg']
  }
];
