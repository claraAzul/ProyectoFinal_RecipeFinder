import { combineReducers } from "redux";
import { recipeReducer } from "./RecipeReducer";

export const rootReducer = combineReducers({
  recipes: recipeReducer,
});