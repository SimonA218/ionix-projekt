"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiUser, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

// Dáta pre navigačné odkazy
const navLinks = [
  { href: '#produkty', label: 'Produkty' },
  { href: '#recenzie', label: 'Recenzie' },
  { href: '#galeria', label: 'Galéria' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { cartCount } = useCart();
  const displayCount = cartCount > 9 ? '9+' : cartCount;

  // Efekt na zabránenie scrollovania, keď je mobilné menu otvorené
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup funkcia pre prípad, že by sa komponent odpojil
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  // Efekt na sledovanie scrollu a zvýraznenie aktívnej sekcie
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      let currentSection = '';
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop - 150;
          if (window.scrollY >= sectionTop) {
            currentSection = `#${section.id}`;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Funkcia pre plynulé scrollovanie
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Vždy zatvorí mobilné menu po kliknutí
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isMenuOpen ? '' : 'bg-black/30 backdrop-blur-md shadow-lg'}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          <Link href="/" className="transition hover:opacity-80 z-50">
            <Image src="/images/IonixWhite.png" alt="Ionix Logo" width={120} height={40} />
          </Link>

          {/* Desktopová Navigácia */}
          <div className="hidden md:flex items-center gap-8 text-white">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className={`nav-link ${activeSection === link.href ? 'active' : ''}`}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktopové Ikony */}
          <div className="hidden md:flex items-center gap-5 text-white">
            <button className="icon-link" aria-label="Používateľský účet"><FiUser size={22} /></button>
            <button className="icon-link relative" aria-label="Nákupný košík">
              <FiShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center bg-brand-purple text-white text-[10px] h-5 w-5 rounded-full pointer-events-none">
                  {displayCount}
                </span>
              )}
            </button>
          </div>

          {/* Hamburger Tlačidlo (Mobil) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50 relative">
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobilné Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-30 transition-opacity duration-300 ease-in-out
                   ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="container mx-auto h-full flex flex-col items-center justify-center gap-10">
          {navLinks.map((link, index) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)} 
              className={`nav-link text-3xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${activeSection === link.href ? 'active' : ''}`}
              style={{ transitionDelay: isMenuOpen ? `${100 + index * 100}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          
          <div className="border-t border-white/20 w-1/3 my-6"></div>

          <div className="flex items-center gap-8 text-white">
            <button className="icon-link" aria-label="Používateľský účet"><FiUser size={28} /></button>
            <button className="icon-link relative" aria-label="Nákupný košík">
              <FiShoppingCart size={28} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center bg-brand-purple text-white text-xs h-5 w-5 rounded-full pointer-events-none">
                  {displayCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;