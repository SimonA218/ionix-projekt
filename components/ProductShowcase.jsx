import ProductCard from "@/components/ProductCard";
import { drones } from "@/data/drones";

const ProductShowcase = () => {
  return (
    <section id="produkty" className="bg-[#0d0d0d] py-20 sm:py-32">
      <div className="container mx-auto px-6">
        
        {/* Nadpis sekcie - zostáva rovnaký */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Zoznámte sa s Našou <span className="text-brand-purple">Letkou</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Vybrali sme pre vás to najlepšie. Či už začínate, alebo ste profesionál, máme dron presne pre vás.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 
    
          */}
          {drones.map((drone) => (
            <ProductCard key={drone.id} drone={drone} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;