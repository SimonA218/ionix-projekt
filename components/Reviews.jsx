import { FaStar } from 'react-icons/fa';
import { reviews } from '@/data/reviews'; // Importujeme dáta s recenziami

// Malý pomocný komponent pre hviezdičky (zostáva rovnaký)
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={index < rating ? 'text-amber-400' : 'text-slate-600'}
        />
      ))}
    </div>
  );
};

// Pomocná funkcia na získanie iniciálok
const getInitials = (name) => {
  const nameParts = name.split(' ');
  if (nameParts.length > 1) {
    return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
  }
  return name[0].toUpperCase();
};

const Reviews = () => {
  return (
    <section id="recenzie" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        {/* Hlavný nadpis sekcie */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Čo Hovoria Naši <span className="text-brand-purple">Piloti</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Dôvera je pre nás kľúčová. Prečítajte si, čo si o našich dronoch myslia ľudia ako vy.
          </p>
        </div>

        {/* Mriežka s recenziami */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-slate-900/50 p-8 rounded-xl border border-white/10
                         flex flex-col"
            >
              {/* --- KĽÚČOVÁ ZMENA JE TU --- */}
              <div className="flex items-center mb-4">
                {/* Nový avatar s iniciálkami namiesto obrázku */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/20 border border-brand-purple/50">
                  <span className="font-bold text-brand-purple text-lg">
                    {getInitials(review.name)}
                  </span>
                </div>
                
                <div className="ml-4">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-slate-400">{review.location}</p>
                </div>
              </div>

              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{review.title}</h3>
              <p className="text-slate-300 flex-grow">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;