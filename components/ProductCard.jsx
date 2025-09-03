"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaCamera, FaBatteryFull, FaSatelliteDish } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ drone }) => {
  const { addToCart } = useCart();
  if (!drone) {
    return null;
  }

  let specs = {};
  try {
    if (drone.specs) {
      specs = JSON.parse(drone.specs);
    }
  } catch (e) {
    console.error(`Chyba pri parsovaní specs pre dron ${drone.name}:`, e);
  }

  return (
    <Link 
      href={`/Products/${drone.id}`} 
      className="group relative flex flex-col bg-slate-900/50 rounded-xl border border-white/10 overflow-hidden
                 transition-all duration-300 hover:shadow-glow-purple-light hover:-translate-y-2"
    >
      <div className="overflow-hidden">
        <Image
          src={drone.image}
          alt={drone.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white">{drone.name}</h3>
        <p className="text-sm text-slate-400 mt-1">{drone.slogan}</p>

        {/* --- TOTO JE UPRAVENÁ SEKCIA PRE ŠPECIFIKÁCIE --- */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-slate-300 text-sm">
          
          {/* 1. Kamera (z objektu 'specs') */}
          {specs.kamera && (
            <div className="flex items-center gap-2" title="Kamera">
              <FaCamera />
              <span>{specs.kamera}</span>
            </div>
          )}
          
          {/* 2. Letový čas (priamo z 'drone') */}
          {drone.flight_time && (
            <div className="flex items-center gap-2" title="Letový čas">
              <FaBatteryFull />
              <span>{drone.flight_time} Minút</span>
            </div>
          )}
          
          {/* 3. Dosah (priamo z 'drone') */}
          {drone.range && (
            <div className="flex items-center gap-2" title="Dosah signálu">
              <FaSatelliteDish />
              <span>{drone.range} km</span>
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-6 flex justify-between items-center">
          <p className="text-2xl font-bold text-white">{drone.price} €</p>
          
           <button 
            className="btn btn-primary text-sm px-4 py-2 z-10 relative"
            onClick={(e) => {
              e.preventDefault(); // Zastaví presmerovanie na detai
              addToCart(drone); 
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