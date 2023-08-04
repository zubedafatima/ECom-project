import { Dashboard } from "./Dashboard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { E_URL } from "../url";
import { addToCart, removeFromCart } from "../redux/Actions/cartActions";
import "../Styles/detailStyle.css";

//gets the product id from the called page

export function Detail() {
  function Back() {
    window.history.back();
  }
  const location = useLocation();
  const id = location.state?.id;

  //gets the product details from the product id
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  function RemoveCart() {
    console.log("remove cart");
    dispatch(removeFromCart(product.id));
    alert("Removed from cart");
  }

  function AddCart(id, name, price, image) {
    console.log("add cart");
    dispatch(addToCart(id, name, price, image));
    alert("Added to cart");
  }
  useEffect(() => {
    //getting all 6 products and search for the id
    axios
      .get(E_URL, {
        params: { limit: 6 },
      })
      .then((res) => {
        const foundProduct = res.data.find((obj) => obj.id === id);
        setProduct(foundProduct || {});
      })
      .catch((err) => {
        console.log("Error getting data");
      });
  }, [id]);

  return (
    <Dashboard>
      <div className="DETAILS">
        <h2>Details for product id: "{product.id}"</h2>
        <div className="details-container">
          <div className="details-img">
            <img src={product.image} alt="product" />
          </div>
          <div className="details-main">
            <div className="details-info">
              <ul>
                <li>
                  <span className="bold-text">Title:</span>
                  {product.title}
                </li>
                <li>
                  <span className="bold-text">Category:</span>
                  {product.category}
                </li>
                <li>
                  <span className="bold-text">Price:</span>${product.price}
                </li>
                <li>
                  <span className="bold-text">Description:</span>
                  {product.description}
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>
                  <button className="Button" onClick={Back}>
                    Back
                  </button>
                </li>
                <li>
                  <button
                    className="Button"
                    onClick={() => RemoveCart(product.id)}
                  >
                    Remove From Cart
                  </button>
                </li>
                <li>
                  <button
                    className="Button"
                    onClick={() =>
                      AddCart(
                        product.id,
                        product.title,
                        product.price,
                        product.image
                      )
                    }
                  >
                    Add to Cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
