//Home page
//A simple jsx element to display the home page
//wrapping the jsx element in the Dashboard component to send as a child
import React from "react";
import { Dashboard } from "../layout/Dashboard";
import { Products } from "../components/products";

export const Home = () => {
  return (
    <Dashboard>
      <div className="HOME">
        <h1>Home</h1>
        <Products />
      </div>
    </Dashboard>
  );
};
