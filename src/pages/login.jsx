import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector and useDispatch for functional components
import { loginUser } from "../redux/Actions/userActions"; // Import action types
import { useNavigate } from "react-router-dom";
// import { registerUser } from "../redux/Actions/registerActions";
import { U_URL } from "../url";
import "../Styles/loginStyle.css";
import { Link } from "react-router-dom";

export function Login() {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [isAdmin, setAdmin] = useState(false);

  const [userData, setData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userID, setID] = useState(0);

  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.user);
  const registered = useSelector((state) => state.userReg);
  const navigate = useNavigate();

  useEffect(() => {
    // Axios API call
    axios
      .get(U_URL)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      console.log("Logged in: ", isAdmin);
      dispatch(loginUser(userID, enteredEmail, isAdmin));
      console.log(userLogged);

      navigate("/user");
    }
  }, [loggedIn]);

  function authenticate() {
    console.log(enteredEmail, enteredPassword, isAdmin);
    if (isAdmin === true) {
      if (enteredEmail === "admin" && enteredPassword === "admin") {
        setLoggedIn(true);
      } else {
        alert("Invalid Credentials");
        setLoggedIn(false);
      }
    } else {
      setAdmin(false);
      for (const obj of userData) {
        if (obj.email === enteredEmail && obj.password === enteredPassword) {
          console.log(obj.email, enteredEmail, obj.password, enteredPassword);
          setLoggedIn(true);
          setID(obj.id);
          break;
        } else {
          setLoggedIn(false);
        }
      }
    }
  }

  return (
    <>
      <div className="Login">
        <div className="Container">
          <h2>LOGIN</h2>
          <label className="login-Head">
            Please Login using account details below
          </label>
          <form onSubmit={authenticate} className="login-form">
            <br />
            <input
              className="Input"
              type="text"
              id="email"
              placeholder="email"
              value={enteredEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="Input"
              type="password"
              id="password"
              placeholder="password"
              value={enteredPassword}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="Checkbox-label">Are you an Admin</label>
            <input
              type="checkbox"
              className="Checkbox"
              check={isAdmin}
              onChange={(e) => setAdmin(e.target.checked)}
            />
          </form>
          <br />
          <label className="login-Head">
            Don't have an account?
            <Link className="LINK" to="/register">
              register
            </Link>
          </label>
          <br />
          <button className="Button" onClick={authenticate}>
            Login
          </button>
          <button className="Button" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    </>
  );
}
