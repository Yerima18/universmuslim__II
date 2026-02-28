"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/components/CartProvider';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'next/navigation';

export default function Shop() {
  const { addItem } = useCart();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') ?? 'Toutes';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedAudience, setSelectedAudience] = useState('Tous');
  const [sortBy, setSortBy] = useState('nouveautes');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categories = ['Toutes', ...Array.from(new Set(products.map(p => p.category)))];
  const audiences = ['Tous', 'Enfants', 'Adultes'];

  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (selectedCategory !== 'Toutes') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedAudience !== 'Tous') {
      result = result.filter(p => p.audience === selectedAudience || p.audience === 'Tous');
    }

    switch (sortBy) {
      case 'prix-croissant':
        result = [...result].sort((a, b) => a.priceFCFA - b.priceFCFA);
        break;
      case 'prix-decroissant':
        result = [...result].sort((a, b) => b.priceFCFA - a.priceFCFA);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedAudience, sortBy]);

  const hasActiveFilters = selectedCategory !== 'Toutes' || selectedAudience !== 'Tous' || searchQuery !== '';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Toutes');
    setSelectedAudience('Tous');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-4xl font-serif font-bold text-slate-900">Boutique</h1>
          <p className="mt-1 text-slate-500">{filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}</p>
        </div>
        {/* Mobile filter toggle */}
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtres
          {hasActiveFilters && <span className="h-2 w-2 rounded-full bg-primary" />}
        </button>
      </div>

      {/* Active filter chips (mobile) */}
      {hasActiveFilters && (
        <div className="lg:hidden flex flex-wrap gap-2 mb-4">
          {searchQuery && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              "{searchQuery}"
              <button onClick={() => setSearchQuery('')}><X className="h-3 w-3" /></button>
            </span>
          )}
          {selectedCategory !== 'Toutes' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {selectedCategory}
              <button onClick={() => setSelectedCategory('Toutes')}><X className="h-3 w-3" /></button>
            </span>
          )}
          {selectedAudience !== 'Tous' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {selectedAudience}
              <button onClick={() => setSelectedAudience('Tous')}><X className="h-3 w-3" /></button>
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className={`w-full lg:w-64 flex-shrink-0 space-y-8 ${filtersOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-8">
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="h-4 w-4 text-primary focus:ring-primary border-slate-300"
                    />
                    <span className={`ml-2.5 text-sm transition-colors ${selectedCategory === category ? 'text-primary font-semibold' : 'text-slate-600 group-hover:text-slate-900'}`}>
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Public</h3>
              <div className="space-y-2">
                {audiences.map(audience => (
                  <label key={audience} className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="audience"
                      value={audience}
                      checked={selectedAudience === audience}
                      onChange={(e) => setSelectedAudience(e.target.value)}
                      className="h-4 w-4 text-primary focus:ring-primary border-slate-300"
                    />
                    <span className={`ml-2.5 text-sm transition-colors ${selectedAudience === audience ? 'text-primary font-semibold' : 'text-slate-600 group-hover:text-slate-900'}`}>
                      {audience}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="w-full text-sm text-slate-500 hover:text-primary transition-colors font-medium"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-6">
            <div className="hidden lg:flex flex-wrap gap-2">
              {hasActiveFilters && (
                <>
                  {selectedCategory !== 'Toutes' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory('Toutes')}><X className="h-3 w-3" /></button>
                    </span>
                  )}
                  {selectedAudience !== 'Tous' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {selectedAudience}
                      <button onClick={() => setSelectedAudience('Tous')}><X className="h-3 w-3" /></button>
                    </span>
                  )}
                </>
              )}
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <label className="text-sm text-slate-500 hidden sm:block">Trier :</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white cursor-pointer"
              >
                <option value="nouveautes">Nouveautés</option>
                <option value="prix-croissant">Prix croissant</option>
                <option value="prix-decroissant">Prix décroissant</option>
              </select>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {filteredProducts.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-center py-16 bg-white rounded-2xl border border-slate-100"
              >
                <p className="text-slate-500 text-lg mb-4">Aucun produit ne correspond à votre recherche.</p>
                <button onClick={resetFilters} className="text-primary font-medium hover:underline">
                  Réinitialiser les filtres
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.07 } } }}
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md"
                    >
                      <Link href={`/produit/${product.slug}`} className="relative aspect-square bg-slate-100 overflow-hidden block">
                        <img
                          src={`https://picsum.photos/seed/${product.slug}/400/400`}
                          alt={product.name}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {product.audience !== 'Tous' && (
                          <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold ${
                            product.audience === 'Enfants'
                              ? 'bg-sky-100 text-sky-700'
                              : 'bg-violet-100 text-violet-700'
                          }`}>
                            {product.audience}
                          </span>
                        )}
                      </Link>
                      <div className="p-5 flex flex-col flex-grow">
                        <span className="text-xs font-medium text-accent uppercase tracking-wider mb-2">{product.category}</span>
                        <Link href={`/produit/${product.slug}`}>
                          <h3 className="text-sm font-medium text-slate-900 flex-grow line-clamp-2 hover:text-primary transition-colors">{product.name}</h3>
                        </Link>
                        <div className="mt-4">
                          <p className="text-lg font-bold text-primary">{product.priceFCFA.toLocaleString('fr-FR')} FCFA</p>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <Link href={`/produit/${product.slug}`} className="text-center px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                            Voir
                          </Link>
                          <button
                            onClick={() => addItem(product)}
                            className="px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors cursor-pointer"
                          >
                            Ajouter
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
