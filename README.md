# Univers Muslim

> Boutique islamique en ligne — Cadeaux, Éducation & Rappels
> Basée à Porto-Novo, Bénin 🇧🇯

---

## Aperçu

**Univers Muslim** est une boutique e-commerce moderne spécialisée dans les cadeaux islamiques, les livres éducatifs et les rappels spirituels. Les commandes se font directement via WhatsApp avec un message pré-rempli automatiquement.

---

## Stack technique

| Catégorie | Technologie |
|-----------|-------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 4 |
| Animations | Motion 12 |
| Fonts | Playfair Display + Inter (Google Fonts) |
| Icônes | Lucide React |
| Backend | Express.js + custom server |
| Langage | TypeScript |

---

## Fonctionnalités

- **Catalogue produits** — 8 produits répartis en 4 catégories : Rappels, Cartes, Coffrets, Enfants
- **Filtrage & tri** — par catégorie, public (Enfants/Adultes) et prix
- **Panier persistant** — sauvegardé dans le `localStorage`
- **Commande WhatsApp** — message pré-rempli avec les détails de la commande et les infos de livraison
- **Animations fluides** — fade-up au scroll, stagger, `AnimatePresence` sur les filtres et le panier
- **Navbar active** — lien de la page courante mis en évidence
- **Bouton WhatsApp flottant** — visible sur toutes les pages
- **SEO** — sitemap dynamique, robots.txt, métadonnées Next.js
- **Responsive** — mobile-first, optimisé pour tous les écrans

---

## Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Copier le fichier d'environnement
cp .env.example .env

# 3. Lancer en développement
npm run dev
```

L'application est accessible sur **http://localhost:3000**.

---

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Build de production |
| `npm start` | Lance le serveur de production |
| `npm run lint` | Vérifie les types TypeScript |
| `npm run clean` | Supprime le cache `.next` |

---

## Configuration

### Numéro WhatsApp
Modifiez `/config/site.ts` :

```typescript
export const siteConfig = {
  whatsappNumber: "229XXXXXXXX",          // Format international sans '+'
  whatsappNumberDisplay: "+229 XX XX XX XX",
};
```

### Ajouter ou modifier des produits
Éditez `/data/products.ts` :

```typescript
{
  id: "9",
  slug: "nom-du-produit",
  name: "Nom du produit",
  priceFCFA: 5000,
  category: "Rappels", // Rappels | Cartes | Coffrets | Enfants
  audience: "Tous",    // Tous | Enfants | Adultes
  description: "Description du produit...",
  images: ["/products/mon-image.jpg"],
}
```

### Remplacer les images placeholder
Les images utilisent actuellement `picsum.photos`. Pour utiliser vos propres images :

1. Placez vos fichiers dans `/public/products/`
2. Mettez à jour le champ `images` dans `/data/products.ts`
3. Remplacez les URLs `picsum.photos` dans les composants par `{product.images[0]}`

---

## Structure du projet

```
univers-muslim/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── boutique/             # Catalogue avec filtres
│   ├── produit/[slug]/       # Page produit dynamique
│   ├── panier/               # Panier & commande
│   ├── a-propos/             # Histoire & valeurs
│   ├── contact/              # Contact & FAQ
│   ├── globals.css           # Thème Tailwind (couleurs, fonts)
│   ├── layout.tsx            # Layout global
│   └── sitemap.ts            # Sitemap dynamique
├── components/
│   ├── Navbar.tsx            # Navigation avec lien actif
│   ├── Footer.tsx            # Pied de page
│   ├── CartProvider.tsx      # Context panier (localStorage)
│   └── FloatingWhatsApp.tsx  # Bouton WhatsApp fixe
├── config/
│   └── site.ts               # Config globale (WhatsApp, nom)
├── data/
│   └── products.ts           # Catalogue produits + types
└── public/
    └── logo.png              # Logo Univers Muslim
```

---

## Déploiement

Le projet est prêt pour être déployé sur **Vercel** (recommandé pour Next.js) :

```bash
npm run build
npm start
```

Pour Vercel, connectez simplement le dépôt GitHub et définissez les variables d'environnement depuis `.env.example`.

---

## Licence

© 2025 Univers Muslim — Tous droits réservés.
