import { API_CONFIG } from "./ApiConfig";

export const searchRecipes = async (ingredient) => {
  const url =`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SEARCH}?s=${ingredient}`;
  
  const response = await fetch(url);
  const data = await response.json();

  if (!data.meals) return [];

  return data.meals.map((meal) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientName = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredientName && ingredientName.trim() !== "") {
        ingredients.push(`${measure || ""} ${ingredientName}`.trim());
      }
    }

    return {
      ...meal,
      ingredients
    };
  });
};