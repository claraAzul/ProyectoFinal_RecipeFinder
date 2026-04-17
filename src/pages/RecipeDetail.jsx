import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../core/Actions/RecipeActions";
import Navbar from "../components/NavBar";
import "../styles/RecipeDetailLayout.css";

function RecipeDetail() {
  const recipe = useSelector((state) => state.recipes.selected);
  const favorites = useSelector((state) => state.recipes.favorites);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addFavorite(recipe));
  };

  const isFavorite = favorites.some(
    (fav) => fav.idMeal === recipe?.idMeal
  );

  return (
    <div className="detail-container">

      <div className="detail-content">

        {!recipe ? (
          <p className="detail-empty">No recipe selected</p>
        ) : (
          <>

            <div className="detail-image-wrapper">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="detail-image"
              />
            </div>


            <div className="detail-header-row">
              <h1 className="detail-title">{recipe.strMeal}</h1>

              <button
                className={`favorite-button ${isFavorite ? "active" : ""}`}
                onClick={handleFavorite}
              >
                <h3>{isFavorite ? "Added" : "Add to favorites"}</h3>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="heart-icon"
                  stroke="#c75133"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" /* fill="none" */ />
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>

              </button>
            </div>


            <div className="detail-section">
              <h3 className="section-title">Ingredients</h3>
              <ul className="ingredients-list">
                {recipe.ingredients &&
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
              </ul>
            </div>


            <div className="detail-section">
              <h3 className="section-title">Preparation</h3>
              <p className="instructions-text">
                {recipe.strInstructions}
              </p>
            </div>
          </>
        )}

      </div>

      <Navbar />
    </div>
  );
}

export default RecipeDetail;