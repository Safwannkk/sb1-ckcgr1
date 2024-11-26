export interface Meal {
  id: string;
  name: string;
  cuisine: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image: string;
  price: number;
  ingredients: string[];
  dietaryTags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
}

export interface CuisineType {
  id: string;
  name: string;
  image: string;
  description: string;
}