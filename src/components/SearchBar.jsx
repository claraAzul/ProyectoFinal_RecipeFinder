import { useState } from "react";

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