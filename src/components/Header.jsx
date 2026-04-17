import SearchBar from "./SearchBar";
import "../styles/HeaderStyle.css";

function Header({ onSearch }) {
  return (
    <div className="header">
      <h1 className="header-title">Recipe Finder</h1>

      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Header;