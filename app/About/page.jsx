import Image from 'next/image';
import { FiCpu, FiHeart, FiEye, FiUsers } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <div className="bg-black text-white">
      {/* --- 1. Hero Sekcia --- */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image 
          src="/images/DronePic5.116Z.png" // Použi nejaký pekný záber z galérie
          alt="Tím Ionix pri práci v teréne"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="relative z-20 px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Posúvame Hranice Perspektívy</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Sme viac než len obchod. Sme komunita pilotov, inovátorov a tvorcov, ktorých spája vášeň pre lietanie a technológie.
          </p>
        </div>
      </section>

      {/* --- 2. Naša Misia a Hodnoty --- */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Textová časť */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Náš Príbeh, Vaša Inšpirácia</h2>
              <p className="text-slate-400 mb-4">
                Ionix Drones vznikol z jednoduchého sna: sprístupniť profesionálnu leteckú kinematografiu každému, kto má víziu. Začali sme v malej dielni, testovaním a vylepšovaním každého komponentu, aby sme vytvorili stroje, ktoré sú nielen výkonné, ale aj intuitívne a spoľahlivé.
              </p>
              <p className="text-slate-400">
                Našou misiou je dať vám do rúk nástroj, ktorý premení vaše nápady na dychberúcu realitu. Veríme, že najlepšie príbehy sú tie, ktoré sú videné z novej, nečakanej perspektívy.
              </p>
            </div>
            {/* Časť s hodnotami */}
            <div className="grid grid-cols-2 gap-6">
              <div className="value-card"><FiCpu size={28} /> Inovácia</div>
              <div className="value-card"><FiHeart size={28} /> Vášeň</div>
              <div className="value-card"><FiEye size={28} /> Vízia</div>
              <div className="value-card"><FiUsers size={28} /> Komunita</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Sekcia Tímu (Voliteľné) --- */}
      <section className="bg-#0d0d0d py-20 sm:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Zoznámte sa s Tímom</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Príklad člena tímu */}
            <div className="team-member-card">
              <Image src="/images/Martin.jpg" alt="Martin S." width={120} height={120} className="rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4">Martin S.</h3>
              <p className="text-brand-purple font-semibold">Hlavný Inžinier</p>
              <p className="text-slate-400 text-sm mt-2">"Každý dron je pre mňa puzzle. Mojou úlohou je poskladať ho tak, aby bol dokonalý."</p>
            </div>
            <div className="team-member-card">
              <Image src="/images/Jana.jpg" alt="Jana V." width={120} height={120} className="rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4">Jana V.</h3>
              <p className="text-brand-purple font-semibold">Produktová Manažérka</p>
              <p className="text-slate-400 text-sm mt-2">"Počúvam našich zákazníkov a premieňam ich sny a potreby na reálne funkcie."</p>
            </div>
            <div className="team-member-card">
              <Image src="/images/Tomas.jpg" alt="Tomáš P." width={120} height={120} className="rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-4">Tomáš P.</h3>
              <p className="text-brand-purple font-semibold">Zákaznícka Podpora</p>
              <p className="text-slate-400 text-sm mt-2">"Nič ma nepoteší viac, ako keď pomôžem novému pilotovi úspešne absolvovať jeho prvý let."</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;