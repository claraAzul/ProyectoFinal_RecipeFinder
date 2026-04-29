import {
  SET_RECIPES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_SELECTED,
} from "../Actions/RecipeActions";

const initialState = {
  list: [],
  favorites: [],
  selected: null,
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_RECIPES:
      return {
        ...state,
        list: action.payload,
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

case "REMOVE_FAVORITE":
  return {
    ...state,
    favorites: state.favorites.filter(
      (fav) => fav.idMeal !== action.payload
    ),
  };


    case SET_SELECTED:
      return {
        ...state,
        selected: action.payload,
      };

    default:
      return state;
  }
};