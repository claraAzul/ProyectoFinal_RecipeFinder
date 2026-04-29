import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../core/Actions/RecipeActions";
import Navbar from "../components/NavBar";
import "../styles/RecipeDetailLayout.css";

function RecipeDetail() {
  const recipe = useSelector((state) => state.recipes.selected);
  const favorites = useSelector((state) => state.recipes.favorites);
  const dispatch = useDispatch();

    const handleFavorite = () => {
  if (isFavorite) {
    dispatch(removeFavorite(recipe.idMeal));
  } else {
    dispatch(addFavorite(recipe));
  }
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
  <span>{isFavorite ? "Added" : "Add to favorites"}</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    className="heart-icon"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
            <div className="recipe-actions-bar">
  
  <button className="bar-action">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" />
    </svg>
    <span>Share</span>
  </button>

  <button className="bar-action">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
    <span>Copy</span>
  </button>

</div>
          </>
        )}

      </div>

      <Navbar />
    </div>
  );
}

export default RecipeDetail;