interface CuisineFilterProps {
  selectedCuisine: string | null;
  onCuisineSelect: (cuisine: string | null) => void;
  cuisines: string[];
}

export function CuisineFilter({ selectedCuisine, onCuisineSelect, cuisines }: CuisineFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => onCuisineSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${!selectedCuisine 
            ? 'bg-indigo-500 text-white shadow-sm' 
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
      >
        All Cuisines
      </button>
      {cuisines.map((cuisine) => (
        <button
          key={cuisine}
          onClick={() => onCuisineSelect(cuisine)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCuisine === cuisine
              ? 'bg-indigo-500 text-white shadow-sm'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
        >
          {cuisine}
        </button>
      ))}
    </div>
  );
}