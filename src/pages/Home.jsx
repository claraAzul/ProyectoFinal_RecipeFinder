import { useDispatch, useSelector } from "react-redux";
import { setRecipes, setSelected } from "../core/Actions/RecipeActions";
import { searchRecipes } from "../api/RecipesApi";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import "../styles/HomeLayout.css";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipes = useSelector((state) => state.recipes.list);

  const handleSearch = async (ingredient) => {
    const results = await searchRecipes(ingredient);
    dispatch(setRecipes(results));
  };

  const handleRecipeClick = (recipe) => {
    dispatch(setSelected(recipe));
    navigate("/recipe");
  };

  return (
    <div className="home-container">

      <div className="content">

        <h1>Recipe Finder</h1>

        <SearchBar onSearch={handleSearch} />

        {recipes.length === 0 && (
          <p className="empty-text">
            Search an ingredient to discover delicious recipes 
          </p>
        )}

        <div className="grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onClick={handleRecipeClick}
            />
          ))}
        </div>

      </div>

      <Navbar />

    </div>
  );
}

export default Home;