import { useState } from 'react';
import { Meal } from "@/types";
import { Badge } from "./ui/badge";
import { MealCustomizer } from "./meal-customizer";

interface MealCardProps {
  meal: Meal;
}

export function MealCard({ meal }: MealCardProps) {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [customizedMeal, setCustomizedMeal] = useState(meal);

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="relative">
          <img 
            src={customizedMeal.image} 
            alt={customizedMeal.name} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/90 backdrop-blur-sm">
              ${customizedMeal.price.toFixed(2)}
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{customizedMeal.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{customizedMeal.cuisine}</p>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {customizedMeal.dietaryTags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-sm border-t pt-4 mb-4">
            <div>
              <p className="font-medium text-gray-900">{customizedMeal.calories}</p>
              <p className="text-gray-500 text-xs">Calories</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">{customizedMeal.protein}g</p>
              <p className="text-gray-500 text-xs">Protein</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">{customizedMeal.carbs}g</p>
              <p className="text-gray-500 text-xs">Carbs</p>
            </div>
          </div>

          <button
            onClick={() => setIsCustomizing(true)}
            className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Customize Meal
          </button>
        </div>
      </div>

      {isCustomizing && (
        <MealCustomizer
          meal={meal}
          onClose={() => setIsCustomizing(false)}
          onSave={setCustomizedMeal}
        />
      )}
    </>
  );
}