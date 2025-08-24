import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-6">
        
        {/* Hlavný nadpis stránky */}
        <header className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white">
            Spojte sa s Nami
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
            Máte otázku, nápad, alebo sa len chcete porozprávať o dronoch? Sme tu pre vás. Vyplňte formulár alebo nás kontaktujte priamo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* ĽAVÁ ČASŤ: Kontaktné údaje a mapa */}
          <div className="space-y-8">
            {/* Kontaktné karty */}
            <div className="contact-info-card">
              <FiMail className="w-8 h-8 text-brand-purple" />
              <div>
                <h3 className="text-xl font-semibold">E-mail</h3>
                <p className="text-slate-400">Pošlite nám správu na</p>
                <a href="mailto:info@ionixdrones.sk" className="text-sky-400 hover:underline">info@ionixdrones.sk</a>
              </div>
            </div>
            <div className="contact-info-card">
              <FiPhone className="w-8 h-8 text-brand-purple" />
              <div>
                <h3 className="text-xl font-semibold">Telefón</h3>
                <p className="text-slate-400">Zavolajte nám v pracovné dni (9:00 - 17:00)</p>
                <a href="tel:+421912345678" className="text-sky-400 hover:underline">+421 912 345 678</a>
              </div>
            </div>
            <div className="contact-info-card">
              <FiMapPin className="w-8 h-8 text-brand-purple" />
              <div>
                <h3 className="text-xl font-semibold">Sídlo Firmy</h3>
                <p className="text-slate-400">Nájdete nás na adrese (iba po dohode)</p>
                <p>Digital Park, Einsteinova 21, 851 01 Bratislava</p>
              </div>
            </div>

            {/* Vložená Google Mapa */}
            <div className="w-full h-80 rounded-lg overflow-hidden border border-white/10 mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.628842368942!2d17.11234407689956!3d48.13686884841961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8965533190d7%3A0x644c1722883a458b!2sDigital%20Park!5e0!3m2!1ssk!2ssk!4v1724446545123!5m2!1ssk!2ssk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* PRAVÁ ČASŤ: Kontaktný formulár */}
          <div className="bg-slate-900/50 p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Napíšte nám správu</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Meno</label>
                <input type="text" id="name" name="name" className="form-input" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Váš e-mail</label>
                <input type="email" id="email" name="email" className="form-input" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Správa</label>
                <textarea id="message" name="message" rows="5" className="form-input"></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-full">
                  Odoslať Správu
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;