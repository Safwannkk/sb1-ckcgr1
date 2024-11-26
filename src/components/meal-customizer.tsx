import React, { useState } from 'react';
import { Badge } from './ui/badge';
import type { Meal } from '@/types';
import { calculateNutrients } from '@/lib/nutrients';

interface MealCustomizerProps {
  meal: Meal;
  onClose: () => void;
  onSave: (customizedMeal: Meal) => void;
}

export function MealCustomizer({ meal, onClose, onSave }: MealCustomizerProps) {
  const [portions, setPortions] = useState(1);
  const [extras, setExtras] = useState<string[]>([]);
  const nutrients = calculateNutrients(meal, portions, extras);

  const availableExtras = [
    { name: 'Extra Protein', protein: 10, calories: 50 },
    { name: 'Extra Veggies', carbs: 5, calories: 25 },
    { name: 'Avocado', fat: 8, calories: 80 },
  ];

  const toggleExtra = (extra: string) => {
    setExtras(prev => 
      prev.includes(extra) 
        ? prev.filter(e => e !== extra)
        : [...prev, extra]
    );
  };

  const handleSave = () => {
    onSave({
      ...meal,
      ...nutrients,
      price: meal.price * portions + (extras.length * 2.5)
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <h2 className="text-xl font-semibold mb-4">Customize Your Meal</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Portions
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPortions(p => Math.max(1, p - 0.5))}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              -
            </button>
            <span className="font-medium">{portions}</span>
            <button
              onClick={() => setPortions(p => p + 0.5)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add Extras
          </label>
          <div className="flex flex-wrap gap-2">
            {availableExtras.map(extra => (
              <button
                key={extra.name}
                onClick={() => toggleExtra(extra.name)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                  ${extras.includes(extra.name)
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {extra.name}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t pt-4 mb-6">
          <h3 className="font-medium mb-2">Nutrition Facts</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Calories</p>
              <p className="font-medium">{nutrients.calories}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Protein</p>
              <p className="font-medium">{nutrients.protein}g</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Carbs</p>
              <p className="font-medium">{nutrients.carbs}g</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Fat</p>
              <p className="font-medium">{nutrients.fat}g</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}