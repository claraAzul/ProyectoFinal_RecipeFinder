import { useSelector, useDispatch } from "react-redux";
import { setSelected } from "../core/Actions/RecipeActions";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes.list) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRecipeClick = (recipe) => {
    dispatch(setSelected(recipe));
    navigate("/recipe");
  };

  if (recipes.length === 0) {
    return (
      <p className="empty-text">
        Search an ingredient to discover delicious recipes
      </p>
    );
  }

  return (
    <div className="grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onClick={handleRecipeClick}
        />
      ))}
    </div>
  );
}

export default RecipeList;