import "./Styles/globalCSS.css";
import { Home } from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { User } from "./pages/user";
import { Cart } from "./components/cart";
import { Protected } from "./components/authenticated";
import { Register } from "./pages/register";
import { AllUsers } from "./pages/allUsers";
import { Detail } from "./layout/details";
import { Products } from "./components/products";

function App() {
  return (
    <div className="App-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/product" element={<Products />} />

        <Route element={<Protected />}>
          <Route path="/user" element={<User />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allUsers" element={<AllUsers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
