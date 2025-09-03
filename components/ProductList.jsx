"use client";

import { useState, useMemo } from 'react';
import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";

console.log("DÁTA PRIJATÉ Z BACKENDU:", initialDrones);

const ProductList = ({ initialDrones }) => {
  // 1. STAV: Rozšírime o nové filtre
  const [filters, setFilters] = useState({
    categories: [],
    price: 2500, // Zostáva, ak by si chcel aj cenu
    flightTime: 0,
    range: 0,
  });

  // 2. HANDLER: Je už univerzálny a nemusí sa meniť
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

  // 3. FILTROVANIE: Pridáme nové podmienky
  const filteredDrones = useMemo(() => {
    if (!initialDrones) return [];
    
    return initialDrones.filter(drone => {
      const priceMatch = Number(drone.price) <= filters.price;
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(drone.category);
      // NOVÉ PODMIENKY
      const flightTimeMatch = drone.flight_time >= filters.flightTime;
      const rangeMatch = drone.range >= filters.range;
      
      return priceMatch && categoryMatch && flightTimeMatch && rangeMatch;
    });
  }, [filters, initialDrones]);

  return (
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
            {initialDrones && initialDrones.length > 0 && filteredDrones.length === 0 ? (
              <p className="col-span-full text-center text-slate-400">Žiadne produkty nezodpovedajú vášmu výberu.</p>
            ) : null}
            {filteredDrones.map((drone) => (
              <ProductCard key={drone.id} drone={drone} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;