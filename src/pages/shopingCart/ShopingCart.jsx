import { useSelector, useDispatch } from "react-redux";
import { setCart, removeCart } from "../../features/cakeSlices";
import "./shopingCart.css";

const ShopingCart = () => {
  const addedCake = useSelector(setCart);
  const { cakes } = addedCake;
  const prices = cakes.map((cake) => cake.price);
  const totalPrice = prices.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  }, 0);
  const dispatch = useDispatch();
  const handleClear = (e) => {
    e.preventDefault();
    dispatch(removeCart());
  };

  return (
    <>
      <div className="cart-items">
        {cakes.map((cake, index) => (
          <div className="cart-item" key={index}>
            <div className="cart-image">
              <img src={cake.image} alt="cakeImage" />
              <h3>{cake.title}</h3>
            </div>
            <div className="cart-item-price">
              <div>${cake.price}</div>
            </div>
            <div className="cart-item-quantity">1</div>
          </div>
        ))}
      </div>
      <div className="total-price">Total:${totalPrice}</div>
      <button className="clear" onClick={handleClear}>
        Clear
      </button>
    </>
  );
};
export default ShopingCart;
