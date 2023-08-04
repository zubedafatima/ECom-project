import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../redux/Actions/registerActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { U_URL } from "../url";
import { Link } from "react-router-dom";
import "../Styles/registerStyle.css";

export function Register() {
  const [enteredfirst, setFirstName] = useState("");
  const [enteredlast, setLastName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredUsername, setUsername] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [enteredPhone, setPhone] = useState("");
  const [isregistered, setRegistered] = useState();

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  function authenticate() {
    console.log(enteredfirst, enteredlast, enteredEmail, enteredPassword);
    if (
      enteredfirst === "" ||
      enteredlast === "" ||
      enteredEmail === "" ||
      enteredPassword === "" ||
      enteredUsername === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    // dispatch(
    //   registerUser(
    //     enteredfirst,
    //     enteredlast,
    //     enteredEmail,
    //     enteredPassword,
    //     enteredUsername
    //   )
    // );
    const postData = {
      email: enteredEmail,
      username: enteredUsername,
      password: enteredPassword,
      name: {
        firstname: enteredfirst,
        lastname: enteredlast,
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: enteredPhone,
    };

    axios
      .post(U_URL, postData)
      .then((response) => {
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
    alert("Registration Successful");
    setRegistered(true);
    navigate("/login");
  }

  return (
    <div className="REGISTER">
      <div className="Container">
        <form onSubmit={authenticate}>
          <h2>Enter Registration Details</h2>
          <br />

          <input
            className="Input"
            type="text"
            id="fname"
            placeholder="first name"
            value={enteredfirst}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="Input"
            type="text"
            id="lname"
            placeholder="last name"
            value={enteredlast}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="Input"
            type="text"
            id="phone"
            placeholder="Phone number"
            value={enteredPhone}
            onChange={(e) => setPhone(e.target.value)}
          />
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
            type="text"
            id="username"
            placeholder="Username"
            value={enteredUsername}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="Input"
            type="password"
            id="password"
            placeholder="password"
            value={enteredPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <br />

        <label>
          Already have an account?{" "}
          <Link className="LINK" to="/login">
            Login
          </Link>
        </label>
        <br />
        <button className="Button-RS" onClick={authenticate}>
          Register
        </button>

        <button className="Button-RS" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  );
}
