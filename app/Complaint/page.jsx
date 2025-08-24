import { FiFileText, FiSend, FiTool } from 'react-icons/fi';
import Link from 'next/link';

const ReklamaciePage = () => {
  return (
    <div className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <header className="text-center mb-16">
          <FiFileText className="text-brand-purple mx-auto mb-4" size={48} />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Reklamačný Poriadok
          </h1>
          <p className="mt-6 text-lg text-slate-400">
            V Ionix Drones si stojíme za kvalitou našich produktov. Ak sa napriek tomu vyskytne problém, sme tu, aby sme ho vyriešili rýchlo a férovo.
          </p>
        </header>

        <main className="space-y-12">
          
          {/* Sekcia: Záručná doba */}
          <div className="policy-section">
            <h2 className="policy-heading">1. Záručná Doba</h2>
            <p className="policy-text">
              Na všetok tovar zakúpený v našom eshope sa vzťahuje štandardná záručná doba 24 mesiacov, pokiaľ nie je pri produkte uvedené inak. Záručná doba začína plynúť dňom prevzatia tovaru zákazníkom.
            </p>
          </div>

          {/* Sekcia: Ako postupovať pri reklamácii */}
          <div className="policy-section">
            <h2 className="policy-heading">2. Ako Postupovať Pri Reklamácii</h2>
            <p className="policy-text">
              Pre čo najrýchlejšie vybavenie vašej reklamácie vás prosíme o dodržanie nasledujúceho postupu:
            </p>
            <ol className="list-decimal list-inside space-y-3 mt-4 text-slate-300">
              <li>
                <strong>Kontaktujte nás:</strong> Najprv nás informujte o probléme e-mailom na adrese <a href="mailto:reklamacie@ionixdrones.sk" className="policy-link">reklamacie@ionixdrones.sk</a>. Do e-mailu uveďte číslo vašej objednávky a podrobný popis vady.
              </li>
              <li>
                <strong>Vyplňte formulár:</strong> Pošleme vám jednoduchý reklamačný formulár, ktorý vyplníte a priložíte k reklamovanému tovaru.
              </li>
              <li>
                <strong>Zabezpečíme zvoz:</strong> Po dohode zabezpečíme bezplatný zvoz produktu kuriérom priamo od vás do nášho servisného strediska.
              </li>
            </ol>
          </div>

          {/* Sekcia: Na čo sa záruka nevzťahuje */}
          <div className="policy-section">
            <h2 className="policy-heading">3. Na Čo sa Záruka Nevzťahuje</h2>
            <p className="policy-text">
              Záruka sa nevzťahuje na vady spôsobené:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-slate-300">
              <li>Mechanickým poškodením (napr. pádom, haváriou).</li>
              <li>Používaním produktu v rozpore s návodom na obsluhu.</li>
              <li>Vniknutím vody alebo iných kvapalín do zariadenia.</li>
              <li>Bežným opotrebením produktu (napr. zníženie kapacity batérie po čase).</li>
              <li>Neoprávneným zásahom do zariadenia alebo neodbornou opravou.</li>
            </ul>
          </div>
          
          {/* Sekcia: Lehota na vybavenie */}
          <div className="policy-section">
            <h2 className="policy-heading">4. Lehota na Vybavenie</h2>
            <p className="policy-text">
              Vašu reklamáciu sa snažíme vybaviť v čo najkratšom možnom čase. Zo zákona máme na jej vybavenie lehotu 30 dní od dňa prijatia reklamovaného tovaru. O výsledku vás budeme informovať e-mailom.
            </p>
          </div>

          {/* Záverečná sekcia s kontaktom */}
          <div className="text-center border-t border-white/10 pt-12 mt-16">
            <FiTool className="text-brand-purple mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold">Máte ďalšie otázky?</h3>
            <p className="mt-4 text-slate-400">Ak ste nenašli odpoveď, neváhajte sa obrátiť na náš tím podpory.</p>
            <div className="mt-6">
              <Link href="/Contact" className="btn btn-secondary inline-flex items-center gap-2">
                <FiSend /> Kontaktovať Podporu
              </Link>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default ReklamaciePage;