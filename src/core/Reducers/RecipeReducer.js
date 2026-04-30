import {
  SET_RECIPES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_SELECTED,
  SET_SEARCH_RESULTS,
  RESET_HOME,
} from "../Actions/RecipeActions";

const initialState = {
  list: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  selected: null,
  searchResults: [],
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_RECIPES:
      return {
        ...state,
        list: action.payload,
      };

    case ADD_FAVORITE: {
      const updated = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updated));

      return {
        ...state,
        favorites: updated,
      };
    }

    case "REMOVE_FAVORITE": {
      const updated = state.favorites.filter(
        (fav) => fav.idMeal !== action.payload
      );

      localStorage.setItem("favorites", JSON.stringify(updated));

      return {
        ...state,
        favorites: updated,
      };
    }


    case SET_SELECTED:
      return {
        ...state,
        selected: action.payload,
      };

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };

    case RESET_HOME:
      return {
        ...state,
        searchResults: [],
      };

    default:
      return state;
  }
};

