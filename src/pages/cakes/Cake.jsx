import { addCart } from "../../features/cakeSlices";
import { useDispatch } from "react-redux";

const Cake = ({ cake }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addCart(cake));
  };
  return (
    <div className="cake">
      <div className="cake-title">{cake.title}</div>
      <div className="cake-image">
        <img src={cake.image} alt="cakeImage" />
      </div>
      <span>${cake.price}</span>
      <button className="cake-button" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};
export default Cake;
