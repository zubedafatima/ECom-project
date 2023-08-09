import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { E_URL } from "../url.js";
import "../Styles/productStyle.css";
import { Load } from "./loading.js";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    //console.log("useEffect");
    axios
      .get(E_URL, {
        params: { limit: 8 },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error getting data");
      });
    //console.log(products);
  }, []);

  const Display = (id) => () => {
    //console.log("Display", id);

    navigate("/details", { state: { id } });
  };

  if (products.length === 0) {
    return <Load />;
  }
  return (
    <>
      <div className="PRODUCTS">
        <h2>Eco-Friendly Products</h2>

        <div className="products-main">
          {products.map((product) => {
            return (
              <>
                <div className="CARD" onClick={Display(product.id)}>
                  <div className="product-container" key={product.id}>
                    <div className="product-img">
                      <img src={product.image} alt={product.title} />
                    </div>
                  </div>
                  <div className="Info">
                    <span>{product.title}</span>
                    <br />
                    <span className="Price">${product.price}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
