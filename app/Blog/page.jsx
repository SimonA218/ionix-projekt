import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts'; // Importujeme všetky články
import { FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  return (
    // Používame padding, aby obsah nebol nalepený na header a footer
    <div className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        
        {/* Hlavný nadpis stránky */}
        <header className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white">
            Náš <span className="text-brand-purple">Logbook</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
            Vitajte v našom archíve vedomostí. Nájdete tu tipy, triky, návody a novinky zo sveta dronov, ktoré vám pomôžu stať sa lepším pilotom.
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={post.slug} className="group block bg-slate-900/50 rounded-xl border border-white/10 
                                                         overflow-hidden transition-all duration-300
                                                         hover:border-brand-purple hover:-translate-y-2
                                                         flex flex-col"> {/* Pridané flex flex-col */}
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" // Zmenšená výška obrázku
                />
              </div>
              
              {/* Zmenšili sme padding a veľkosti textov */}
              <div className="p-5 flex flex-col flex-grow"> {/* Pridané flex-grow */}
                <p className="text-xs font-semibold text-brand-purple mb-2 uppercase tracking-wider">{post.category}</p> 
                <h3 className="text-lg font-bold text-white leading-snug flex-grow">{post.title}</h3> 
                <p className="text-slate-400 mt-2 text-sm line-clamp-2">{post.excerpt}</p> 
                
                <div className="inline-flex items-center gap-2 text-sky-400 mt-4 text-sm font-semibold
                                group-hover:text-sky-300 transition-colors">
                  Čítať viac
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </main>

      </div>
    </div>
  );
};

export default BlogPage;