import { useDispatch } from "react-redux";
import { setRecipes } from "../core/Actions/RecipeActions";
import { searchRecipes } from "../api/RecipesApi";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import Navbar from "../components/NavBar";

import "../styles/HomeLayout.css";

function Home() {
  const dispatch = useDispatch();

  const handleSearch = async (ingredient) => {
    const results = await searchRecipes(ingredient);
    dispatch(setRecipes(results));
  };

  return (
    <div className="home-container">

      <div className="content">

        <h1>Recipe Finder</h1>

        <SearchBar onSearch={handleSearch} />

        <RecipeList />

      </div>

      <Navbar />

    </div>
  );
}

export default Home;