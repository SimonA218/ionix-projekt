import ProductCard from "@/components/ProductCard";

async function getDrones() {
  try {
    // Adresa musí byť presná
    const response = await fetch('http://127.0.0.1:8000/api/drones', {
      cache: 'no-store' // Zabezpečí, že dáta sú vždy čerstvé
    });

    if (!response.ok) {
      // Ak server vráti chybu (napr. 500), vypíšeme ju
      console.error(`Chyba API: Status ${response.status}`);
      return [];
    }

    const drones = await response.json();
    return drones;

  } catch (error) {
    // Ak nastane sieťová chyba (napr. backend nebeží alebo CORS), vypíšeme ju
    console.error("Chyba pri fetchovaní dát:", error);
    return [];
  }
}

const ProductShowcase = async () => {
  const drones = await getDrones();

  // Pridáme si kontrolný výpis do terminálu
  console.log("Dáta prijaté vo frontend komponente:", drones);

  return (
    <section id="produkty" className="bg-slate-900 py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Zoznámte sa s Našou <span className="text-brand-purple">Letkou</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Vybrali sme pre vás to najlepšie. Či už začínate, alebo ste profesionál, máme dron presne pre vás.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drones && drones.length > 0 ? (
            drones.map((drone) => (
              <ProductCard key={drone.id} drone={drone} />
            ))
          ) : (
            <p className="col-span-3 text-center text-slate-400">
              Momentálne sa nepodarilo načítať produkty. Skontrolujte, či beží backend server a či sú správne nastavené CORS.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;