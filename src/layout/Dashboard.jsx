//layout to render the children component about us, home, etc here
//will contain the navbar

import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const Dashboard = ({ children }) => {
  return (
    <>
      <div className="DASHBOARD">
        <Navbar />
        <div className="dashboard-main">{children}</div>
      </div>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};
