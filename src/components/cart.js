import { Dashboard } from "../layout/Dashboard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Actions/cartActions";
import "../Styles/cartStyle.css";
import { Link } from "react-router-dom";

export function Cart() {
  const dispatch = useDispatch();
  const carttotal = useSelector((state) => state.cart.total);
  let total = carttotal + 20;

  const RemoveItem = (id, price) => {
    //console.log(id);
    dispatch(removeFromCart(id, price));
    //console.log(carttotal);
    total = total - carttotal;
  };

  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Dashboard>
      <div className="CART">
        <div className="Cart-top">
          <ul>
            <li>
              <Link className="home-LINK" to="/">
                Home.
              </Link>
            </li>
            <li>
              <Link className="home-LINK" to="/about">
                About.
              </Link>
            </li>
            <li>
              <Link className="home-LINK" to="/contact">
                Contact.
              </Link>
            </li>
          </ul>
        </div>
        <div className="Cart-container">
          <div className="Cart-items">
            <ul>
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Edit</li>
            </ul>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-title">
                  <span>{item.title}</span>
                </div>
                <div className="item-info">
                  <span>${item.price}</span>
                </div>
                <div className="item-info">
                  <span>1</span>
                </div>
                <div className="item-info">
                  <button
                    className="Button-Remove"
                    onClick={() => RemoveItem(item.id, item.price)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="Cart-totals">
            <ul>
              <li>Subtotal ${carttotal}</li>
              <li>Shipping $20</li>
              <li>Tax $0</li>
              <hr className="line" />
              <li>Total ${total}</li>
            </ul>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
