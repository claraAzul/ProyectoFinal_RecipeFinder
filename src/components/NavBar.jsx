import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetHome } from "../core/Actions/RecipeActions";
import "../styles/NavBarStyle.css";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHome = () => {
    dispatch(resetHome());
    navigate("/");
  };

  const handleFavorites = () => {
    navigate("/favorites");
  };

  return (
    <nav className="navbar">

      <button className="nav-item" onClick={handleHome}>
        <svg viewBox="0 0 24 24" fill="#c75133" className="icon">
          <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0" />
        </svg>
      </button>

      <button className="nav-item" onClick={handleFavorites}>
        <svg viewBox="0 0 24 24" fill="#c75133" className="icon">
          <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
        </svg>
      </button>

    </nav>
  );
}

export default Navbar;