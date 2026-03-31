"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="h-px w-12 bg-accent opacity-50" />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8Z" fill="#C9A84C" opacity="0.8" />
      </svg>
      <div className="h-px w-12 bg-accent opacity-50" />
    </div>
  );
}

function StarRating({ rating, size = 18 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          className={s <= rating ? 'text-accent fill-accent' : 'text-slate-300 fill-slate-300'}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const date = new Date(review.created_at).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-3"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
      }}
    >
      <StarRating rating={review.rating} />
      <p className="text-slate-700 text-sm leading-relaxed">"{review.comment}"</p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
        <span className="font-semibold text-slate-900 text-sm">{review.name}</span>
        <span className="text-xs text-slate-400">{date}</span>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    const { data } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setReviews(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !rating || !comment.trim()) {
      setError('Veuillez remplir tous les champs et choisir une note.');
      return;
    }
    setLoading(true);
    setError('');
    const { error: err } = await supabase
      .from('reviews')
      .insert([{ name: name.trim(), rating, comment: comment.trim() }]);

    if (err) {
      setError('Une erreur est survenue. Réessayez.');
    } else {
      setSubmitted(true);
      setName('');
      setRating(0);
      setComment('');
      fetchReviews();
      setTimeout(() => setSubmitted(false), 5000);
    }
    setLoading(false);
  }

  const avgRating = reviews.length
    ? Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10
    : 0;

  return (
    <section className="py-16 sm:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Témoignages</span>
          <Ornament />
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-3">Avis clients</h2>
          {reviews.length > 0 && (
            <div className="flex items-center justify-center gap-2 mt-3">
              <StarRating rating={Math.round(avgRating)} size={16} />
              <span className="text-sm font-semibold text-slate-700">{avgRating}/5</span>
              <span className="text-sm text-slate-400">— {reviews.length} avis</span>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Reviews list */}
          <div className="lg:col-span-2">
            {reviews.length === 0 ? (
              <motion.p
                className="text-slate-400 text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Soyez le premier à laisser un avis 🌟
              </motion.p>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                variants={{ show: { transition: { staggerChildren: 0.09 } } }}
              >
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </motion.div>
            )}
          </div>

          {/* Form */}
          <motion.div
            className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm h-fit"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-5">Laisser un avis</h3>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="mb-5 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Baaraka Llaahu fik ! Votre avis a été publié. 🌟
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Star selector */}
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-2">Votre note</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s)}
                      onMouseEnter={() => setHoverRating(s)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="cursor-pointer transition-transform hover:scale-110"
                    >
                      <Star
                        size={28}
                        className={
                          s <= (hoverRating || rating)
                            ? 'text-accent fill-accent'
                            : 'text-slate-300 fill-slate-200'
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1.5">Votre prénom</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex : Fatima"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              {/* Comment */}
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1.5">Votre commentaire</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Partagez votre expérience..."
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                />
              </div>

              {error && <p className="text-red-500 text-xs">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl text-white text-sm font-semibold bg-primary hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer"
              >
                {loading ? 'Publication...' : 'Publier mon avis'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
