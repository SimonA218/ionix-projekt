import Link from 'next/link';
import Image from 'next/image'; 

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo zostáva rovnaké */}
        <Link href="/" className="transition hover:opacity-80">
          <Image 
            src="/images/IonixWhite.png"
            alt="Ionix Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* --- HLAVNÁ ZMENA PRE PODČIARKNUTIE --- */}
        {/* Každý odkaz má teraz spoločnú triedu 'nav-link' */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <Link href="/produkty" className="nav-link">Produkty</Link>
          <Link href="/o-nas" className="nav-link">O nás</Link>
          <Link href="/kontakt" className="nav-link">Kontakt</Link>
        </div>

        {/* Ikony na pravej strane si ponechávajú hover efekt zmeny farby */}
        <div className="flex items-center gap-5 text-white">
          <button className="hover:text-brand-purple transition-colors duration-300" aria-label="Hľadať">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
            </svg>
          </button>
          
          <button className="hover:text-brand-purple transition-colors duration-300" aria-label="Používateľský účet">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9.969 9.969 0 0112 15c2.485 0 4.735.91 6.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </button>
          
          <button className="relative hover:text-brand-purple transition-colors duration-300" aria-label="Nákupný košík">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
            <span className="absolute -top-2 -right-2 flex items-center justify-center bg-brand-purple text-white text-xs h-5 w-5 rounded-full">
              2
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;