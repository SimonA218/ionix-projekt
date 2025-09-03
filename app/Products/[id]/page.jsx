import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

// Funkcia na načítanie dát pre JEDEN dron
async function getDrone(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/drones/${id}`, { cache: 'no-store' });
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error("Chyba pri načítavaní detailu dronu:", error);
    return null;
  }
}

// Toto je ASYNCHRONICKÝ SERVEROVÝ KOMPONENT
const ProductDetailPage = async ({ params }) => {
  // Z `params` si vytiahneme ID z URL adresy
  const drone = await getDrone(params.id);

  // Ak sa dron nenašiel, zobrazíme chybovú hlášku
  if (!drone) {
    return <div className="text-center py-20">Produkt sa nenašiel.</div>;
  }
  
  // Rozparsujeme specs, aby sme s nimi mohli pracovať
  const specs = JSON.parse(drone.specs || '{}');

  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        {/* Hlavná mriežka pre dva stĺpce */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* --- ĽAVÝ STĹPEC --- */}
          {/* Vytvorili sme 'div', aby sme mohli spojiť obrázok a obsah balenia */}
          <div className="space-y-12 sticky top-24">
            
            {/* 1. OBRÁZOK PRODUKTU */}
            <div className="bg-slate-900/50 rounded-xl border border-white/10 overflow-hidden">
              <Image 
                src={drone.image}
                alt={drone.name}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* 2. ČO NÁJDETE V BALENÍ (TERAZ JE TU) */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Čo Nájdete v Balení</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg"><span className="text-xl">✈️</span></div>
                  <div>
                    <p className="font-semibold text-white">Dron {drone.name}</p>
                    <p className="text-sm text-slate-400">Pripravený na let hneď po vybalení.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg"><span className="text-xl">🔋</span></div>
                  <div>
                    <p className="font-semibold text-white">Inteligentný Akumulátor</p>
                    <p className="text-sm text-slate-400">Poskytuje až {drone.flight_time} minút letového času.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg"><span className="text-xl">🕹️</span></div>
                  <div>
                    <p className="font-semibold text-white">Diaľkový Ovládač</p>
                    <p className="text-sm text-slate-400">Ergonomický dizajn pre maximálnu presnosť.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg"><span className="text-xl">⚙️</span></div>
                  <div>
                    <p className="font-semibold text-white">3x Pár Náhradných Vrtúľ</p>
                    <p className="text-sm text-slate-400">Pre prípad nečakanej nehody.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-slate-800 rounded-lg"><span className="text-xl">🔌</span></div>
                  <div>
                    <p className="font-semibold text-white">Nabíjačka a Káble</p>
                    <p className="text-sm text-slate-400">Všetko potrebné na rýchle nabitie.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* --- PRAVÝ STĹPEC (Informácie o produkte) --- */}
          {/* Tento stĺpec je teraz čistejší */}
          <div>
            <p className="font-semibold text-brand-purple mb-2">{drone.category.charAt(0).toUpperCase() + drone.category.slice(1)}</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{drone.name}</h1>
            <p className="mt-4 text-lg text-slate-400">{drone.slogan}</p>
            
            <p className="mt-6 text-4xl font-bold text-white">{drone.price} €</p>
            <p className="text-sm text-slate-500">vrátane DPH</p>

            <div className="mt-8">
              <button className="btn btn-primary w-full sm:w-auto text-lg">
                🛒 Vložiť do Košíka
              </button>
            </div>

             {drone.description && (
              <div className="mt-12 border-t border-white/10 pt-8">
                <h3 className="text-xl font-bold mb-4">Popis Produktu</h3>
                <div className="prose prose-invert text-slate-300">
                  <p>{drone.description}</p>
                </div>
              </div>
            )}
            
            <div className="mt-12 border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold mb-4">Kľúčové Vlastnosti</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3"><FiCheckCircle className="text-green-500" /> Kvalita kamery: {specs.kamera}</li>
                <li className="flex items-center gap-3"><FiCheckCircle className="text-green-500" /> Max. letový čas: {drone.flight_time} minút</li>
                <li className="flex items-center gap-3"><FiCheckCircle className="text-green-500" /> Max. dosah: {drone.range} km</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;