import { GiBatwingEmblem, GiCrystalBall, GiGears, GiShield } from 'react-icons/gi';
import { FaBatteryFull, FaCamera, FaGamepad, FaShieldAlt } from 'react-icons/fa';


const KeyBenefits = () => {
  const benefits = [
    {
      icon: <FaCamera className="w-10 h-10 mb-4" />,
      title: "Krištáľovo Čisté 4K Zábery",
      description: "Stabilizácia ako z Hollywoodu, aby každý váš záber bol umeleckým dielom."
    },
    {
      icon: <FaBatteryFull className="w-10 h-10 mb-4" />,
      title: "Lietajte Dlhšie, Tvorte Viac",
      description: "Naša špičková batéria vám poskytne až 32 minút letu na jedno nabitie."
    },
    {
      icon: <FaGamepad className="w-10 h-10 mb-4" />,
      title: "Intuitívne Ovládanie",
      description: "Od úplného začiatočníka po profesionála – vzlietnete za pár minút."
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 mb-4" />,
      title: "Bezpečnosť na Prvom Mieste",
      description: "Inteligentné senzory a odolné materiály chránia vašu investíciu vo vzduchu."
    }
  ];

  return (
    <section className="bg-[#0d0d0d] py-20 sm:py-32">
      <div className="container mx-auto px-6">
        {/* Hlavný nadpis sekcie */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Navrhnuté pre <span className="text-brand-purple">Dokonalosť</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Každý komponent, každá funkcia. Všetko s jediným cieľom – posunúť hranice vašej kreativity.
          </p>
        </div>

        {/* Mriežka s benefitmi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-slate-900/50 p-8 rounded-xl border border-white/10 
                         transition-all duration-300
                         hover:bg-slate-800 hover:-translate-y-2 hover:border-brand-purple"
            >
              <div className="text-brand-purple">
                {benefit.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-slate-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;