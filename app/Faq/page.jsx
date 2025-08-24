"use client"; // Potrebné pre interaktivitu (useState)

import { useState } from 'react';
import { faqData } from '@/data/faqData';
import AccordionItem from '@/components/AccordionItem';

const FAQPage = () => {
  // Stav, ktorý si pamätá ID otvorenej otázky. `null` znamená, že všetky sú zatvorené.
  const [openId, setOpenId] = useState(null);

  // Funkcia na otváranie/zatváranie
  const handleToggle = (id) => {
    // Ak klikneme na už otvorenú otázku, zatvorí sa. Inak sa otvorí nová.
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white">
            Často Kladené <span className="text-brand-purple">Otázky</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
            Máte otázky? My máme odpovede. Tu nájdete všetko, čo potrebujete vedieť pred vaším prvým letom.
          </p>
        </header>

        <main className="max-w-3xl mx-auto">
          {faqData.map((faq) => (
            <AccordionItem 
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id} // Posielame info, či má byť otvorená
              onClick={() => handleToggle(faq.id)} // Posielame funkciu, ktorá sa má spustiť po kliknutí
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default FAQPage;