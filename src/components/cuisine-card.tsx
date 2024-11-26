import { CuisineType } from "@/types";

interface CuisineCardProps {
  cuisine: CuisineType;
}

export function CuisineCard({ cuisine }: CuisineCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={cuisine.image}
        alt={cuisine.name}
        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-6 flex flex-col justify-end">
        <h3 className="text-white text-xl font-semibold">{cuisine.name}</h3>
        <p className="text-white/80 text-sm mt-2">{cuisine.description}</p>
      </div>
    </div>
  );
}