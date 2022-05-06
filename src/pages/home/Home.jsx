import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>WELCOME TO</h1>
      <span>HEHEMADE</span>
      <button className="home-main-button">
        <Link to="/cakes">SHOP NOW</Link>
      </button>
    </div>
  );
};
export default Home;
