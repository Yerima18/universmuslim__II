"use client";

import { Heart, Target, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE, delay },
  viewport: { once: true, margin: '-60px' },
});

const values = [
  { icon: <Heart className="h-8 w-8" />, title: 'Bienveillance', desc: 'Chaque outil est pensé avec soin et amour, pour accompagner les cœurs avec douceur et sincérité.' },
  { icon: <Target className="h-8 w-8" />, title: 'Éducation', desc: "Nous souhaitons transmettre la connaissance et les rappels d'Allah de manière accessible, pour petits et grands, afin de nourrir la foi au quotidien." },
  { icon: <ShieldCheck className="h-8 w-8" />, title: 'Qualité', desc: "Chaque détail est travaillé avec rigueur et authenticité, pour offrir des outils durables et utiles qui inspirent le quotidien." },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeUp()}>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6">Univers Muslim</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Des outils islamiques et spirituels pensés pour accompagner petits et grands au quotidien. Commandez facilement via WhatsApp et recevez votre pack à domicile.
        </p>
      </motion.div>

      {/* Notre histoire */}
      <motion.div className="max-w-3xl mx-auto mb-24 space-y-6" {...fadeUp(0.1)}>
        <h2 className="text-3xl font-serif font-bold text-slate-900">Notre histoire</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Tout a commencé avec une intention : proposer des outils simples et accessibles pour se rapprocher d'Allah au quotidien.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Au fil du temps, cette intention s'est transformée en un projet plus grand : accompagner chaque musulman à travers des outils islamiques pensés avec soin.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Chaque outil est conçu avec amour, sincérité et l'intention d'être un rappel bénéfique au quotidien.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Basés au Bénin, nos outils accompagnent les musulmans partout, avec authenticité et bienveillance.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div className="max-w-3xl mx-auto mb-24 space-y-6" {...fadeUp(0.1)}>
        <h2 className="text-3xl font-serif font-bold text-slate-900">Notre Mission</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Notre mission est d'accompagner chaque cœur vers un rappel constant d'Allah, à travers des outils qui allient beauté, simplicité et utilité.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Nous souhaitons rendre l'apprentissage et la pratique de la foi accessibles, agréables et concrets. Chaque outil est pensé pour nourrir la foi, encourager la méditation et inspirer des gestes sincères au quotidien.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Parce que nous croyons que la spiritualité se construit jour après jour, et que chaque petit rappel peut illuminer le cœur et la maison.
        </p>
      </motion.div>

      {/* Values */}
      <motion.div
        className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100"
        {...fadeUp()}
      >
        <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">Nos Valeurs</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
              <p className="text-slate-600">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
