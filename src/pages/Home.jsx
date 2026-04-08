import { useDispatch, useSelector } from "react-redux";
import { setRecipes, setSelected } from "../core/Actions/RecipeActions";
import { searchRecipes } from "../api/RecipesApi";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

function Home() {

  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes.list);

  const handleSearch = async (ingredient) => {

    const results = await searchRecipes(ingredient);

    dispatch(setRecipes(results));
  };

  const handleRecipeClick = (recipe) => {
    dispatch(setSelected(recipe));
  };

  return (
    <div>

      <h1>Recipe Finder</h1>

      <SearchBar onSearch={handleSearch} />

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

export default Home;