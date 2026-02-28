"use client";

import { MessageCircle, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const faqs = [
  {
    question: "Comment puis-je commander ?",
    answer: "C'est très simple ! Parcourez notre boutique, ajoutez les produits à votre panier, puis cliquez sur 'Commander sur WhatsApp'. Vous serez redirigé vers une discussion avec nous contenant déjà les détails de votre commande."
  },
  {
    question: "Quels sont les modes de livraison ?",
    answer: "Nous livrons partout au Bénin (Cotonou, Porto-Novo, Parakou, etc.) via des services de coursiers ou des compagnies de transport. Les frais varient selon votre localité."
  },
  {
    question: "Quels sont les moyens de paiement ?",
    answer: "Pour le moment, nous acceptons les paiements via Mobile Money (Moov Money, MTN Mobile Money) ou en espèces à la livraison (uniquement à Porto-Novo)."
  },
  {
    question: "Proposez-vous des coffrets personnalisés ?",
    answer: "Oui ! Contactez-nous directement sur WhatsApp pour discuter de vos besoins spécifiques pour des cadeaux de mariage, naissance ou Aïd."
  }
];

const contactItems = [
  {
    href: `https://wa.me/${siteConfig.whatsappNumber}`,
    icon: <MessageCircle className="h-6 w-6" />,
    iconBg: 'bg-[#25D366]/10 text-[#25D366]',
    label: 'WhatsApp',
    value: siteConfig.whatsappNumberDisplay,
    clickable: true,
  },
  { icon: <Mail className="h-6 w-6" />, iconBg: 'bg-primary/10 text-primary', label: 'Email', value: 'contact@universmuslim.com' },
  { icon: <MapPin className="h-6 w-6" />, iconBg: 'bg-primary/10 text-primary', label: 'Localisation', value: 'Porto-Novo, Bénin' },
  { icon: <Clock className="h-6 w-6" />, iconBg: 'bg-primary/10 text-primary', label: 'Horaires', value: 'Lun - Sam: 09h - 19h' },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Contactez-nous</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Une question sur un produit ou une commande ? Nous sommes à votre écoute.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Nos coordonnées</h2>
            <motion.div
              className="space-y-2"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
            >
              {contactItems.map((item, i) => {
                const inner = (
                  <>
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-lg font-bold text-slate-900">{item.value}</p>
                    </div>
                  </>
                );
                return (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
                    }}
                  >
                    {item.clickable && item.href ? (
                      <a href={item.href} className="flex items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-start p-4">{inner}</div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            className="block w-full text-center py-6 bg-[#25D366] text-white rounded-3xl font-bold text-xl shadow-lg hover:bg-[#128C7E] transition-colors"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Discuter sur WhatsApp
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
        >
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Envoyez-nous un message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="votre@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Sujet</label>
              <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="De quoi s'agit-il ?" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Votre message..."></textarea>
            </div>
            <motion.button
              className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Envoyer le message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* FAQ */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        viewport={{ once: true, margin: '-60px' }}
      >
        <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">Questions Fréquentes</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: idx * 0.07 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFaq === idx ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
