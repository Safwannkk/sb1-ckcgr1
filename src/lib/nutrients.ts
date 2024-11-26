interface NutrientExtras {
  name: string;
  protein?: number;
  carbs?: number;
  fat?: number;
  calories?: number;
}

const EXTRAS: Record<string, NutrientExtras> = {
  'Extra Protein': { protein: 10, calories: 50 },
  'Extra Veggies': { carbs: 5, calories: 25 },
  'Avocado': { fat: 8, calories: 80 },
};

export function calculateNutrients(
  meal: { calories: number; protein: number; carbs: number; fat: number },
  portions: number,
  extras: string[]
) {
  let totalNutrients = {
    calories: meal.calories * portions,
    protein: meal.protein * portions,
    carbs: meal.carbs * portions,
    fat: meal.fat * portions,
  };

  extras.forEach(extra => {
    const extraNutrients = EXTRAS[extra];
    if (extraNutrients) {
      if (extraNutrients.calories) totalNutrients.calories += extraNutrients.calories;
      if (extraNutrients.protein) totalNutrients.protein += extraNutrients.protein;
      if (extraNutrients.carbs) totalNutrients.carbs += extraNutrients.carbs;
      if (extraNutrients.fat) totalNutrients.fat += extraNutrients.fat;
    }
  });

  return {
    calories: Math.round(totalNutrients.calories),
    protein: Math.round(totalNutrients.protein),
    carbs: Math.round(totalNutrients.carbs),
    fat: Math.round(totalNutrients.fat),
  };
}