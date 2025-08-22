import Link from 'next/link';
import Image from 'next/image';
// Importujeme ikony pre sociálne siete, knižnicu už máš nainštalovanú
import { FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';

// Pripravíme si dáta pre odkazy, aby bol kód čistejší
const companyLinks = [
  { href: '/o-nas', label: 'O nás' },
  { href: '/blog', label: 'Blog' },
  { href: '/kariera', label: 'Kariéra' },
];

const supportLinks = [
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/faq', label: 'Často kladené otázky' },
  { href: '/reklamacie', label: 'Reklamačný poriadok' },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 sm:pt-24 pb-8">
      <div className="container mx-auto px-6">
        
        {/* Horná časť s odkazmi a newsletterom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Stĺpec: Logo a sociálne siete */}
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

          {/* 2. Stĺpec: Spoločnosť */}
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

          {/* 3. Stĺpec: Podpora */}
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

          {/* 4. Stĺpec: Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Zostaňte v Obraze</h3>
            <p className="text-slate-400 text-sm mb-4">
              Získajte tipy od profíkov, novinky a exkluzívne zľavy priamo do vašej schránky.
            </p>
            
            <form 
            className="flex w-full max-w-sm rounded-lg 
                        border border-brand-purple/50 
                        focus-within:border-brand-purple focus-within:ring-2 focus-within:ring-brand-purple/40
                        transition-all duration-300 overflow-hidden" // Pridali sme overflow-hidden pre istotu
            >
            <input 
                type="email" 
                placeholder="Váš e-mail" 
                // --- KĽÚČOVÁ ZMENA JE TU ---
                className="w-full bg-transparent border-none px-4 text-sm text-white 
                        placeholder-slate-400
                        focus:outline-none focus:ring-0" // Vynulujeme aj ring na inpute
            />
            <button 
                type="submit" 
                className="bg-brand-purple text-white font-bold px-4 
                        hover:bg-opacity-80 transition-colors shrink-0"
            >
                Odoberať
            </button>
            </form>
          </div>
        </div>

        {/* Spodná časť s copyrightom */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ionix Drones. Všetky práva vyhradené.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;