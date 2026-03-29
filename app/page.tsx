
"use client";

import React from 'react';
import { FiGlobe, FiInstagram, FiMessageCircle, FiChevronRight } from 'react-icons/fi';

const PureScanLinkPage = () => {
  const links = [
    {
      title: "Web Sitemizi Ziyaret Edin",
      subtitle: "Hizmetlerimizi inceleyin",
      url: "https://purescanapp.com",
      icon: <FiGlobe size={28} className="text-white/80" />, // Beyaz ikon
      type: "pink" // Pembe buton
    },
    {
      title: "Instagram'da Takip Et",
      subtitle: "@purescanapp",
      url: "https://www.instagram.com/purescanapp",
      icon: <FiInstagram size={28} className="text-white/80" />, // Beyaz ikon
      type: "green" // Yeşil buton
    },
    {
      title: "Profesyonel Çözümlerimiz",
      subtitle: "Linkedin üzerinden ulaşın",
      url: "https://www.linkedin.com/company/112570312/admin/dashboard/",
      icon: <FiMessageCircle size={24} className="text-[#299f40]" />, // Yeşil ikon
      type: "white" // Beyaz buton
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-center py-6 border-b border-gray-50">
        <span className="text-xl font-bold text-[#299f40] tracking-tight text-center">PureScan</span>
      </nav>

      <main className="max-w-md mx-auto px-6 pt-12 pb-20 flex flex-col items-center">
        {/* Logo Alanı */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#299f40] to-[#E89575] rounded-full blur opacity-10"></div>
          <div className="relative h-32 w-32 bg-white rounded-full p-1 shadow-xl flex items-center justify-center overflow-hidden border border-gray-100">
             <img 
                src="/logo.jpeg" 
                alt="Logo" 
                className="w-full h-full object-contain rounded-full" 
                onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/150"; }} 
            />
          </div>
        </div>

        {/* Başlık - Güncellenmiş Gri-Lacivert Tonu */}
        <h1 className="mt-8 text-4xl font-extrabold text-center tracking-tight text-[#334155] leading-tight">
          Hoş Geldiniz
        </h1>
        <p className="mt-4 text-center text-gray-400 font-medium px-4">
          Hizmetlerimize hızlıca göz atmak için aşağıdaki butonları kullanabilirsiniz.
        </p>

        {/* Butonlar - Pembe, Yeşil, Beyaz */}
        <div className="w-full mt-10 space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-5 rounded-2xl transition-all duration-300 transform active:scale-95 shadow-sm hover:shadow-md border
                ${link.type === 'pink' ? 'bg-[#E89575] text-white border-transparent' : ''}
                ${link.type === 'green' ? 'bg-[#299f40] text-white border-transparent' : ''}
                ${link.type === 'white' ? 'bg-white border-gray-100 text-[#E89575]' : ''}
              `}
            >
              <div className="mr-4">{link.icon}</div>
              <div className="flex-1">
                <div className="font-bold text-lg leading-tight">{link.title}</div>
                <div className={`text-sm ${link.type === 'white' ? 'text-gray-400' : 'text-white/70'}`}>
                  {link.subtitle}
                </div>
              </div>
              <FiChevronRight size={18} className={link.type === 'white' ? 'text-gray-300' : 'text-white/40'} />
            </a>
          ))}
        </div>

        <footer className="mt-20 text-xs text-gray-300 tracking-widest text-center">
          © 2026 PureScanApp <br/> Tüm hakları saklıdır.
        </footer>
      </main>
    </div>
  );
};

export default PureScanLinkPage;