"use client";

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Salam, j'ai une question sur votre boutique.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-200"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
