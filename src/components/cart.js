import { Dashboard } from "../layout/Dashboard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Actions/cartActions";
import "../Styles/cartStyle.css";

export function Cart() {
  const dispatch = useDispatch();

  const back = () => {
    window.history.back();
  };

  const RemoveItem = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };

  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Dashboard>
      <div className="CART">
        <h1>CART</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <span className="Label">Item:</span>
                {item.title}
                <span className="Label">Price: </span>${item.price}
                <button className="Button" onClick={() => RemoveItem(item.id)}>
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="Button" onClick={back}>
          Back
        </button>
      </div>
    </Dashboard>
  );
}
