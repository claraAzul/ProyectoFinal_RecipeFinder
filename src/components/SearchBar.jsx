import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SearchBarStyle.css";

function SearchBar({ onSearch }) {
  const [ingredient, setIngredient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredient);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search ingredient..."
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;