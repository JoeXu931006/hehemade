import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import hehemadeLogo from "../../images/hehemade-logo.png";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app-navbar">
      <Link className="app-navbar-logo" to="/">
        <img src={hehemadeLogo} alt="hehemade-logo" />
      </Link>
      <div className="app-navbar-links">
        <Link className="app-navbar-links-link" to="/">
          Home
        </Link>
        <Link className="app-navbar-links-link" to="/about">
          About
        </Link>
        <Link className="app-navbar-links-link" to="/cakes">
          Cakes
        </Link>
        <Link className="app-navbar-links-link" to="/price">
          Price
        </Link>
        <Link className="app-navbar-links-link" to="/shopingcart">
          <FiShoppingCart />
        </Link>
      </div>
      <div className="app-navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app-navbar-smallscreen-overlay">
            <VscClose
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <div className="app-navbar-smallscreen-links">
              <Link
                className="app-navbar-smallscreen-links-link"
                to="/"
                onClick={() => setToggleMenu(false)}
              >
                Home
              </Link>
              <Link
                className="app-navbar-smallscreen-links-link"
                to="/about"
                onClick={() => setToggleMenu(false)}
              >
                About
              </Link>
              <Link
                className="app-navbar-smallscreen-links-link"
                to="/cakes"
                onClick={() => setToggleMenu(false)}
              >
                Cakes
              </Link>
              <Link
                className="app-navbar-smallscreen-links-link"
                to="/price"
                onClick={() => setToggleMenu(false)}
              >
                Price
              </Link>
              <Link
                className="app-navbar-smallscreen-links-link"
                to="/shopingcart"
                onClick={() => setToggleMenu(false)}
              >
                <FiShoppingCart />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
