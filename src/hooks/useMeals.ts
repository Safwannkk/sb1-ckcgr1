import { useState } from 'react';
import type { Meal } from '@/types';

const initialMeals: Meal[] = [
  {
    id: "1",
    name: "Grilled Salmon Bowl",
    cuisine: "Japanese",
    calories: 450,
    protein: 32,
    carbs: 45,
    fat: 18,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    price: 14.99,
    ingredients: ["Salmon", "Rice", "Avocado", "Seaweed"],
    dietaryTags: ["Gluten-Free", "High-Protein"]
  },
  {
    id: "2",
    name: "Vegetarian Buddha Bowl",
    cuisine: "Asian Fusion",
    calories: 380,
    protein: 15,
    carbs: 55,
    fat: 12,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    price: 12.99,
    ingredients: ["Quinoa", "Sweet Potato", "Chickpeas", "Kale"],
    dietaryTags: ["Vegan", "Vegetarian"]
  },
  {
    id: "3",
    name: "Mediterranean Plate",
    cuisine: "Mediterranean",
    calories: 420,
    protein: 22,
    carbs: 48,
    fat: 16,
    image: "https://images.unsplash.com/photo-1544378730-8b5104b41308",
    price: 13.99,
    ingredients: ["Falafel", "Hummus", "Pita", "Greek Salad"],
    dietaryTags: ["Vegetarian", "Mediterranean"]
  },
  {
    id: "4",
    name: "Spicy Tuna Roll",
    cuisine: "Japanese",
    calories: 350,
    protein: 24,
    carbs: 38,
    fat: 14,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    price: 15.99,
    ingredients: ["Tuna", "Rice", "Nori", "Spicy Mayo"],
    dietaryTags: ["Pescatarian", "High-Protein"]
  }
];

export function useMeals() {
  const [meals, setMeals] = useState<Meal[]>(initialMeals);
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  const filteredMeals = selectedCuisine
    ? meals.filter(meal => meal.cuisine === selectedCuisine)
    : meals;

  return {
    meals: filteredMeals,
    selectedCuisine,
    setSelectedCuisine,
  };
}