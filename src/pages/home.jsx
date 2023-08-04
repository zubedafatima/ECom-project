//Home page
//A simple jsx element to display the home page
//wrapping the jsx element in the Dashboard component to send as a child
import React from "react";
import { Dashboard } from "../layout/Dashboard";
import { Products } from "../components/products";
import { Link } from "react-router-dom";

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
        <Products />
      </div>
    </Dashboard>
  );
};
