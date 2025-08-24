import { FiBriefcase, FiSend } from 'react-icons/fi';
import Link from 'next/link';
const KarieraPage = () => {
return (
// Používame min-h-screen, aby sa sekcia roztiahla na celú výšku obrazovky, ak je obsahu málo
<div className="min-h-screen flex items-center justify-center bg-black">
<div className="container mx-auto px-6 py-24 text-center">

    <div className="flex justify-center mb-6">
      <div className="p-5 bg-slate-800/50 border border-brand-purple/30 rounded-full">
        <FiBriefcase className="text-brand-purple" size={48} />
      </div>
    </div>

    {/* Hlavný Nadpis */}
    <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
      Pridajte sa k Našej Letke
    </h1>

    {/* Podnadpis */}
    <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
      Momentálne máme všetky pozície obsadené a aktívne nehľadáme nových členov do nášho tímu.
    </p>

    {/* Doplňujúci text s pozitívnym odkazom */}
    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
      Ceníme si však váš záujem! Svet dronov sa neustále mení a nové príležitosti môžu vzlietnuť kedykoľvek. Sledujte nás na sociálnych sieťach alebo nám pošlite svoj životopis a my sa vám ozveme, keď sa otvorí pozícia presne pre vás.
    </p>

    {/* CTA Tlačidlo */}
    <div className="mt-12">
      <Link href="/Contact" className="btn btn-primary inline-flex items-center gap-3">
        <FiSend />
        Kontaktujte Nás
      </Link>
    </div>

  </div>
</div>
);
};
export default KarieraPage;