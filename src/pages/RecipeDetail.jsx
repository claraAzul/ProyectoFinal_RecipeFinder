import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../core/Actions/RecipeActions";
import Navbar from "../components/NavBar";

function RecipeDetail() {

  const recipe = useSelector((state) => state.recipes.selected);

  const dispatch = useDispatch();

  if (!recipe) return <p>No recipe selected</p>;

  const handleFavorite = () => {
    dispatch(addFavorite(recipe));
  };

  return (
    <div>

      <Navbar />

      <h2>{recipe.strMeal}</h2>

      <img src={recipe.strMealThumb} width="300" alt={recipe.strMeal} />

      <p>{recipe.strInstructions}</p>

      <button onClick={handleFavorite}>
        Add to favorites ❤️
      </button>

    </div>
  );
}

export default RecipeDetail;