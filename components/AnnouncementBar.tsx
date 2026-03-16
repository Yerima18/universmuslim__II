export default function AnnouncementBar() {
  return (
    <div className="bg-[#003D5C] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 text-center">
        <span className="font-semibold text-[#C9A84C]">📦 Sur commande uniquement</span>
        <span className="hidden sm:block text-white/40">·</span>
        <span>Paiement requis avant traitement</span>
        <span className="hidden sm:block text-white/40">·</span>
        <span>Délais de préparation : 24h – 72h selon l&apos;outil</span>
      </div>
    </div>
  );
}
