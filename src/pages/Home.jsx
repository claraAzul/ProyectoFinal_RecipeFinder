import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRecipes } from "../core/Actions/RecipeActions";
import { searchRecipes } from "../api/RecipesApi";

import Header from "../components/Header";
import RecipeList from "../components/RecipeList";
import Navbar from "../components/NavBar";

import { recipesMock } from "../mocks/RecipesMock";

import "../styles/HomeLayout.css";

function Home() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setRecipes(recipesMock));
  }, [dispatch]);

  
  const handleSearch = async (ingredient) => {
    const results = await searchRecipes(ingredient);
    dispatch(setRecipes(results));
  };

  return (
    <div className="home-container">
      <div className="content">
        <Header onSearch={handleSearch} />
        <RecipeList />
      </div>

      <Navbar />
    </div>
  );
}

export default Home;