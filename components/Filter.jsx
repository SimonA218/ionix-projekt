

const Filter = () => {
  return (
    <aside className="bg-slate-900/30 p-6 rounded-xl border border-white/10">
      <h3 className="text-2xl font-bold text-white mb-6">Filtrovať</h3>

      {/* Filter podľa kategórie */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Určenie</h4>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/> Začiatočník</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/> Pokročilý</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/> Profesionál</label>
        </div>
      </div>

      {/* Filter podľa ceny */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Cena</h4>
        <input type="range" min="0" max="2000" className="range-slider" />
        <div className="flex justify-between text-sm text-slate-400">
          <span>0 €</span>
          <span>2000 €</span>
        </div>
      </div>
      
      {/* Filter podľa funkcií */}
      <div>
        <h4 className="font-semibold mb-3">Kľúčové Funkcie</h4>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/> 4K Kamera</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/> Senzory prekážok</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="form-checkbox"/> Skladateľný</label>
        </div>
      </div>
    </aside>
  );
};

export default Filter;