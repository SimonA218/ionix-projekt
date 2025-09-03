"use client";

import { useState, useEffect, useMemo } from 'react';
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";


export default function HomePage() {
  // Stav pre VŠETKY drony načítané z API
  const [allDrones, setAllDrones] = useState([]);
  
  // Stav pre aktuálne nastavenia filtra
  const [filters, setFilters] = useState({
    categories: [],
    price: 2500,
    flightTime: 0,
    range: 0,
  });

  // Načítanie dát z API pri prvom renderovaní stránky
  useEffect(() => {
    const fetchDrones = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/drones');
        if (!response.ok) throw new Error('Chyba siete');
        const data = await response.json();
        setAllDrones(data);
      } catch (error) {
        console.error("Nepodarilo sa načítať drony:", error);
      }
    };
    fetchDrones();
  }, []);

  // Univerzálna funkcia na spracovanie zmien z filtra
  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFilters(prevFilters => {
      if (type === 'checkbox') {
        const currentValues = prevFilters[name] || [];
        if (checked) {
          return { ...prevFilters, [name]: [...currentValues, value] };
        } else {
          return { ...prevFilters, [name]: currentValues.filter(item => item !== value) };
        }
      }
      return { ...prevFilters, [name]: Number(value) };
    });
  };

  // Logika na filtrovanie, ktorá reaguje na zmeny
  const filteredDrones = useMemo(() => {
    return allDrones.filter(drone => {
      const priceMatch = Number(drone.price) <= filters.price;
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(drone.category);
      const flightTimeMatch = drone.flight_time >= filters.flightTime;
      const rangeMatch = drone.range >= filters.range;
      
      return priceMatch && categoryMatch && flightTimeMatch && rangeMatch;
    });
  }, [filters, allDrones]);

  return (
    <div className="relative">
      <HeroSection />
      <main className="relative z-10">
        <Benefits />
        <section id="produkty" className="py-20 sm:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Naša Kompletná <span className="text-brand-purple">Letka</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
              <aside>
                <Filter 
                  filters={filters} 
                  onFilterChange={handleFilterChange} 
                />
              </aside>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {allDrones.length === 0 && <p className="col-span-full text-center text-slate-400">Načítavam produkty...</p>}
                {allDrones.length > 0 && filteredDrones.length === 0 && <p className="col-span-full text-center text-slate-400">Žiadne produkty nezodpovedajú vášmu výberu.</p>}
                {filteredDrones.map((drone) => (
                  <ProductCard key={drone.id} drone={drone} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <Reviews /> 
        <Gallery /> 
       
      </main>
    </div>
  );
}