import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { E_URL } from "../url.js";
import "../Styles/productStyle.css";

export function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect");
    axios
      .get(E_URL, {
        params: { limit: 6 },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error getting data");
      });
  }, []);

  const Display = (id) => () => {
    console.log("Display", id);
    navigate("/details", { state: { id } });
  };

  return (
    <div className="PRODUCTS">
      <h3>Products</h3>
      <div className="products-main">
        {products.map((product) => {
          return (
            <>
              <div className="product-container" key={product.id}>
                <div className="product-img">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                  <p>{product.title}</p>
                  <p>price: {product.price}$</p>
                  <button className="Button" onClick={Display(product.id)}>
                    View More
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
