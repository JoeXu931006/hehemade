import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Cakes from "./pages/cakes/Cakes";
import Price from "./pages/price/Price";
import ShopingCart from "./pages/shopingCart/ShopingCart";

import cakes from "./data/cakeData";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cakes" element={<Cakes cakes={cakes} />} />
        <Route path="/price" element={<Price />} />
        <Route path="/shopingcart" element={<ShopingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
