"use client";

import { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/data/gallery';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  return (
    <section id="galeria" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Svet Videný <span className="text-brand-purple">Našimi Očami</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Každý záber rozpráva príbeh. Vyberte si ten svoj.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-5xl mx-auto"> 
          
          {/* Hlavný obrázok (zostáva rovnaký, bez orezu) */}
          <div 
            className="relative w-full rounded-xl overflow-hidden shadow-2xl shadow-black/30 flex justify-center items-center bg-black/20"
            style={{ maxHeight: '75vh' }} 
          >
            <Image
              key={activeImage.id}
              src={activeImage.src}
              alt={activeImage.alt}
              width={1920}
              height={1080}
              className="w-full h-auto max-h-[75vh] object-contain animate-fade-in"
            />
          </div>
          
          {/* --- KĽÚČOVÁ ZMENA: HORIZONTÁLNY SCROLLER PRE NÁHĽADY --- */}
          <div 
            className="flex gap-2 md:gap-4 overflow-x-auto pb-4
             snap-x snap-mandatory 
             scrollbar-thin scrollbar-thumb-brand-purple scrollbar-track-transparent scrollbar-thumb-rounded-full"
          >
            {galleryImages.map((image, index) => (
              <button 
                key={image.id} 
                onClick={() => setActiveIndex(index)}
                // 'shrink-0' je dôležité, aby sa náhľady nedeformovali
                className="shrink-0 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-brand-purple"
              >
                <Image 
                  src={image.src} 
                  alt={`Náhľad: ${image.alt}`}
                  width={120}
                  height={80}
                  className={`w-24 h-16 md:w-28 md:h-20 object-cover cursor-pointer transition-all duration-300
                             ${activeIndex === index 
                               ? 'opacity-100 ring-2 ring-brand-purple'
                               : 'opacity-50 hover:opacity-100'
                             }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
            {/* ... tvoj kód pre hashtag ... */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;