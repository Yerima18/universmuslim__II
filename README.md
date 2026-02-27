# Univers Muslim - Boutique de Cadeaux Islamiques

Une plateforme e-commerce moderne pour Univers Muslim, spécialisée dans les cadeaux islamiques, l'éducation et les rappels.

## Fonctionnalités
- **Catalogue complet** : Présentation élégante des produits avec images et prix en FCFA.
- **Panier persistant** : Utilisation du localStorage pour conserver les articles.
- **Commande WhatsApp** : Flux fluide générant un message pré-rempli avec les détails de la commande.
- **Générateur d'images IA** : Création de visuels uniques via Gemini 3 Pro.
- **SEO Optimisé** : Métadonnées, sitemap et robots.txt inclus.
- **Design Premium** : Style minimaliste inspiré de Notion avec des touches islamiques modernes.

## Installation et Lancement

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer en mode développement** :
   ```bash
   npm run dev
   ```

3. **Build pour la production** :
   ```bash
   npm run build
   ```

4. **Lancer en production** :
   ```bash
   npm start
   ```

## Configuration

### Changer le numéro WhatsApp
Modifiez le fichier `/config/site.ts` :
```typescript
export const siteConfig = {
  whatsappNumber: "229XXXXXXXX", // Format international sans le '+'
  whatsappNumberDisplay: "+229 XX XX XX XX", // Format d'affichage
};
```

### Remplacer les images des produits
Les images actuelles utilisent des placeholders via `picsum.photos`. Pour utiliser vos propres images :
1. Placez vos fichiers dans `/public/products/`.
2. Mettez à jour les chemins dans `/data/products.ts` (ex: `images: ['/products/mon-image.jpg']`).
3. Dans les composants (`page.tsx`, `boutique/page.tsx`, etc.), remplacez l'URL `picsum.photos` par le chemin de l'image du produit.

## Structure du Projet
- `/app` : Routes et pages Next.js (App Router).
- `/components` : Composants UI réutilisables et Context Providers.
- `/data` : Données des produits et types TypeScript.
- `/config` : Configuration globale du site.
- `/public` : Assets statiques (images, robots.txt).

## Déploiement
L'application est prête à être déployée sur n'importe quelle plateforme supportant Next.js (Vercel, Cloud Run, etc.). Assurez-vous de configurer la variable d'environnement `NEXT_PUBLIC_GEMINI_API_KEY` pour le générateur d'images.
