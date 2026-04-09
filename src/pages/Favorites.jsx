import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/NavBar";
import RecipeCard from "../components/RecipeCard";
import { setSelected, removeFavorite } from "../core/Actions/RecipeActions";
import { useNavigate } from "react-router-dom";

function Favorites() {

  const favorites = useSelector((state) => state.recipes.favorites);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRecipeClick = (recipe) => {
    dispatch(setSelected(recipe));
    navigate("/recipe");
  };

  const handleRemoveFavorite = (recipe) => {
    dispatch(removeFavorite(recipe));
  };

  return (
    <div>
      <Navbar />

      <h2>My Favorite Recipes ❤️</h2>

      {favorites.length === 0 && (
        <p>You haven't added any favorite recipes yet.</p>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {favorites.map((recipe) => (
          <div key={recipe.idMeal} style={{ position: "relative" }}>
            <RecipeCard
              recipe={recipe}
              onClick={handleRecipeClick}
            />

            {/* Botón para eliminar favorito */}
            <button
              onClick={() => handleRemoveFavorite(recipe)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                backgroundColor: "#ff4d4f",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;