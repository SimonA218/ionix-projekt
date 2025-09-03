const Filter = ({ filters, onFilterChange }) => {
  // Bezpečnostné poistky
  const currentCategories = filters?.categories || [];
  const currentPrice = filters?.price || 2500;
  const currentFlightTime = filters?.flightTime || 0;
  const currentRange = filters?.range || 0;

  return (
    <aside className="bg-slate-900/30 p-6 rounded-xl border border-white/10 text-white">
      <h3 className="text-2xl font-bold mb-6">Filtrovať</h3>

      {/* Filter kategórií */}
      <div className="mb-8">
        <h4 className="font-semibold mb-3">Určenie</h4>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" name="categories" value="zaciatocnik" checked={currentCategories.includes('zaciatocnik')} onChange={onFilterChange} className="form-checkbox" /> 
            <span>Začiatočník</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" name="categories" value="pokrocily" checked={currentCategories.includes('pokrocily')} onChange={onFilterChange} className="form-checkbox" /> 
            <span>Pokročilý</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" name="categories" value="profesional" checked={currentCategories.includes('profesional')} onChange={onFilterChange} className="form-checkbox" /> 
            <span>Profesionál</span>
          </label>
        </div>
      </div>

      {/* Filter ceny */}
      <div className="mb-8">
        <h4 className="font-semibold mb-3">Cena do: {currentPrice} €</h4>
        <input type="range" name="price" min="0" max="2500" step="100" value={currentPrice} onChange={onFilterChange} className="range-slider w-full" />
      </div>
      
      {/* Filter letového času */}
      <div className="mb-8">
        <h4 className="font-semibold mb-3">Min. letový čas: {currentFlightTime}+ min</h4>
        <input type="range" name="flightTime" min="0" max="60" step="5" value={currentFlightTime} onChange={onFilterChange} className="range-slider w-full" />
      </div>

      {/* Filter dosahu */}
      <div>
        <h4 className="font-semibold mb-3">Min. dosah: {currentRange}+ km</h4>
        <input type="range" name="range" min="0" max="20" step="1" value={currentRange} onChange={onFilterChange} className="range-slider w-full" />
      </div>
    </aside>
  );
};

export default Filter;