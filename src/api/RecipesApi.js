/* const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchRecipes = async (ingredient) => {

  const response = await fetch(
    `${BASE_URL}/search.php?s=${ingredient}`
  );

  const data = await response.json();

  return data.meals || [];
}; */


const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchRecipes = async (ingredient) => {
  const response = await fetch(`${BASE_URL}/search.php?s=${ingredient}`);
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