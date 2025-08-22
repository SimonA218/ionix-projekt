"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

// DÁTA PRE NAVIGÁCIU - ak pridáš novú sekciu s id, stačí ju pridať sem
const navLinks = [
  { href: '#produkty', label: 'Produkty' },
  { href: '#recenzie', label: 'Recenzie' },
  { href: '#galeria', label: 'Galéria' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Efekt na sledovanie scrollu a zvýraznenie aktívnej sekcie
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      let currentSection = '';

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop - 150; // Buffer pre lepšiu detekciu
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
    setIsMenuOpen(false); // Zatvorí mobilné menu po kliknutí
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="transition hover:opacity-80">
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

        {/* Ikony na pravej strane (Desktop) */}
        <div className="hidden md:flex items-center gap-5 text-white">
          <button className="icon-link" aria-label="Hľadať"><FiSearch size={22} /></button>
          <button className="icon-link" aria-label="Používateľský účet"><FiUser size={22} /></button>
          <button className="icon-link relative" aria-label="Nákupný košík">
            <FiShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 flex items-center justify-center bg-brand-purple text-white text-[10px] h-5 w-5 rounded-full">3</span>
          </button>
        </div>

        {/* Hamburger Menu Tlačidlo (Mobil) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50 relative">
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobilné Menu (Vysúvacie) */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-lg pt-24 transition-transform duration-300 ease-in-out
                   ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className={`nav-link text-2xl ${activeSection === link.href ? 'active' : ''}`}>
              {link.label}
            </a>
          ))}
          {/* Oddeľovač a ikony v mobilnom menu */}
          <div className="border-t border-white/20 w-1/2 my-4"></div>
          <div className="flex items-center gap-8 text-white">
            <button className="icon-link" aria-label="Hľadať"><FiSearch size={24} /></button>
            <button className="icon-link" aria-label="Používateľský účet"><FiUser size={24} /></button>
            <button className="icon-link relative" aria-label="Nákupný košík">
              <FiShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 flex items-center justify-center bg-brand-purple text-white text-xs h-5 w-5 rounded-full">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;