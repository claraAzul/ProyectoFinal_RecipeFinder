import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/NavBar";
import RecipeCard from "../components/RecipeCard";
import { setSelected, removeFavorite } from "../core/Actions/RecipeActions";
import { useNavigate } from "react-router-dom";
import "../styles/FavoritesLayout.css";

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
    <div className="favorites-container">
      <Navbar />

      <div className="favorites-content">
        <h2 className="favorites-title">My Favorite Recipes <svg viewBox="0 0 24 24" fill="#c75133" className="icon">
          <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
        </svg></h2>

        {favorites.length === 0 && (
          <p className="favorites-empty">
            You haven't added any favorite recipes yet.
          </p>
        )}

        <div className="favorites-grid">
          {favorites.map((recipe) => (
            <div key={recipe.idMeal} className="favorite-card-wrapper">
              <RecipeCard
                recipe={recipe}
                onClick={handleRecipeClick}
              />

              <button
                className="remove-button"
                onClick={() => handleRemoveFavorite(recipe)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;