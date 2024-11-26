import { MealCard } from './meal-card';
import type { Meal } from '@/types';

interface MealGridProps {
  meals: Meal[];
}

export function MealGrid({ meals }: MealGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}