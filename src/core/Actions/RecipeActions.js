export const SET_RECIPES = "SET_RECIPES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SET_SELECTED = "SET_SELECTED";


export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  payload: recipes,
});

export const addFavorite = (recipe) => ({
  type: ADD_FAVORITE,
  payload: recipe,
});

export const removeFavorite = (recipe) => ({
  type: REMOVE_FAVORITE,
  payload: recipe,
});


export const setSelected = (recipe) => ({
  type: SET_SELECTED,
  payload: recipe,
});