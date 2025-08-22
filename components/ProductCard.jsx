"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaCamera, FaBatteryFull, FaSatelliteDish } from 'react-icons/fa';

const ProductCard = ({ drone }) => {
  if (!drone) {
    return null;
  }

  return (
    // Celá karta je teraz obalená v Link komponente
    <Link 
      href={`/produkty/${drone.id}`} 
      className="group relative block bg-slate-900/50 rounded-xl border border-white/10 overflow-hidden
                 transition-all duration-300 hover:shadow-glow-purple-light hover:-translate-y-2"
    >
      {/* 1. Obrázok už nie je v samostatnom Linku */}
      <div className="overflow-hidden">
        <Image
          src={drone.image}
          alt={drone.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* 2. Zvyšok obsahu je tiež vnútri Linku, takže je všetko klikateľné */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{drone.name}</h3>
        <p className="text-sm text-slate-400 mt-1">{drone.slogan}</p>

        <div className="flex items-center gap-4 mt-4 text-slate-300 text-sm">
          <div className="flex items-center gap-2"><FaCamera /> {drone.specs.kamera}</div>
          <div className="flex items-center gap-2"><FaBatteryFull /> {drone.specs.letovy_cas}</div>
          <div className="flex items-center gap-2"><FaSatelliteDish /> {drone.specs.dosah}</div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-2xl font-bold text-white">{drone.price}</p>
          
          {/* 3. Tlačidlo "Pridať do Košíka" už nie je Link, ale reálne tlačidlo */}
          <button 
            className="btn btn-primary text-sm px-4 py-2 z-10 relative"
            // Pridáme onClick handler, ktorý zastaví propagáciu kliku na Link
            onClick={(e) => {
              e.preventDefault(); // Zastaví presmerovanie na detail produktu
              console.log(`Produkt ${drone.name} pridaný do košíka!`);
              // Tu by bola reálna logika pre pridanie do košíka
            }}
          >
            🛒 Pridať do Košíka
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;