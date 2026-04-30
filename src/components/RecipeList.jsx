import { useSelector, useDispatch } from "react-redux";
import { setSelected } from "../core/Actions/RecipeActions";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";

function RecipeList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const list = useSelector((state) => state.recipes.list) || [];
  const searchResults = useSelector(
    (state) => state.recipes.searchResults
  ) || [];

  const recipesToShow =
    searchResults.length > 0 ? searchResults : list;

  const handleRecipeClick = (recipe) => {
    dispatch(setSelected(recipe));
    navigate("/recipe");
  };

  if (recipesToShow.length === 0) {
    return (
      <p className="empty-text">
        Search an ingredient to discover delicious recipes
      </p>
    );
  }

  return (
    <div className="grid">
      {recipesToShow.map((recipe) => (
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

