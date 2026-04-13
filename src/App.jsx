import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/recipe" element={<RecipeDetail />} />

        <Route path="/favorites" element={<Favorites />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;