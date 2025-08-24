"use client";

import { useState } from 'react'; // 1. Chýbajúci import
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';
import { FiCheckCircle, FiX } from 'react-icons/fi';

// DÁTA PRE ODKAZY - Odporúčam používať malé písmená pre URL
const companyLinks = [
  { href: '/About', label: 'O nás' },
  { href: '/Blog', label: 'Blog' },
  { href: '/Career', label: 'Kariéra' },
];

const supportLinks = [
  { href: '/Contact', label: 'Kontakt' },
  { href: '/Faq', label: 'Často kladené otázky' },
  { href: '/Complaint', label: 'Reklamačný poriadok' },
];

// 2. Definícia komponentu je tu iba JEDENKRÁT
const Footer = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Formulár odoslaný!");
    setIsPopupVisible(true);
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 sm:pt-24 pb-8 relative">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/IonixWhite.png"
                alt="Ionix Logo"
                width={120}
                height={40}
              />
            </Link>
            <p className="text-slate-400 text-sm max-w-xs">
              Posúvame hranice kreativity. Objavte svet z novej perspektívy.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaYoutube /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebookF /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Spoločnosť</h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Podpora</h3>
            <ul className="space-y-3">
              {supportLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Zostaňte v Obraze</h3>
            <p className="text-slate-400 text-sm mb-4">
              Získajte tipy od profíkov, novinky a exkluzívne zľavy priamo do vašej schránky.
            </p>
            <form 
              onSubmit={handleNewsletterSubmit}
              className="flex w-full max-w-sm rounded-lg border border-brand-purple/50 focus-within:border-brand-purple focus-within:ring-2 focus-within:ring-brand-purple/40 transition-all duration-300 overflow-hidden"
            >
              <input 
                type="email" 
                placeholder="Váš e-mail" 
                required 
                className="w-full bg-transparent border-none px-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-0"
              />
              <button 
                type="submit" 
                className="bg-brand-purple text-white font-bold px-4 hover:bg-opacity-80 transition-colors shrink-0"
              >
                Odoberať
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ionix Drones. Všetky práva vyhradené.</p>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-brand-purple/50 rounded-2xl shadow-2xl p-8 max-w-sm text-center animate-fade-in-up">
            <FiCheckCircle className="text-green-400 mx-auto mb-4" size={56} />
            <h2 className="text-2xl font-bold text-white">Ďakujeme!</h2>
            <p className="text-slate-300 mt-2">
              Ste úspešne prihlásený. Pripravte sa na exkluzívne novinky a tipy zo sveta dronov priamo vo vašej schránke.
            </p>
            <button 
              onClick={() => setIsPopupVisible(false)}
              className="btn btn-secondary mt-6"
            >
              Zatvoriť
            </button>
          </div>
          <button 
            onClick={() => setIsPopupVisible(false)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
          >
            <FiX size={28} />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;