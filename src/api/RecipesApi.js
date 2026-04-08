const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchRecipes = async (ingredient) => {

  const response = await fetch(
    `${BASE_URL}/search.php?s=${ingredient}`
  );

  const data = await response.json();

  return data.meals || [];
};