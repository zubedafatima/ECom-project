//Home page
//A simple jsx element to display the home page
//wrapping the jsx element in the Dashboard component to send as a child
import React from "react";
import { Dashboard } from "../layout/Dashboard";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const ProductsComponent = lazy(() => import("../components/products"));
//lazy loading wont specifically work for our case because main delay is caused by API calls and not componenet rendering

export const Home = () => {
  return (
    <Dashboard>
      <div className="HOME">
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
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsComponent />
        </Suspense>
      </div>
    </Dashboard>
  );
};
