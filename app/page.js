"use client";

import { useState, useMemo } from 'react';
import { drones } from "@/data/drones";
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery"; 

export default function HomePage() {
  const [filters, setFilters] = useState({
    categories: [],
    price: 2500,
  });

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

  const filteredDrones = useMemo(() => {
    return drones.filter(drone => {
      const priceMatch = Number(drone.price.replace(' €', '').replace(',', '')) <= filters.price;
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(drone.category);
      return priceMatch && categoryMatch;
    });
  }, [filters]);

  return (
    <>
      <HeroSection />

      <main>
        <Benefits />

        <section id="produkty" className="py-20 sm:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Naša Kompletná <span className="text-brand-purple">Letka</span>
              </h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                Filtrujte a nájdite dron, ktorý posunie hranice vašej kreativity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
              <aside>
                <Filter 
                  filters={filters} 
                  onFilterChange={handleFilterChange} 
                />
              </aside>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
    </>
  );
}