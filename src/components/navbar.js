import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Navbar() {
  const userLogged = useSelector((state) => state.user);
  let logged = false;

  const len = userLogged.users.length - 1;
  if (userLogged.users.length !== 0) {
    logged = userLogged.users[len].isLoggedIn;
  }

  const admin = userLogged.users[len].isAdmin;

  return (
    <div className="NAV">
      <Link to="/">E-COM</Link>
      <ul>
        <li>Hello! {userLogged.users[len].email}</li>
        {!logged && <Link to="/login">Login</Link>}
        {logged && <Link to="/user">Login</Link>}
        {!logged && <Link to="/register">Register</Link>}
        <Link to="/user">User</Link>

        {admin ? (
          <Link to="/allUsers">All Users</Link>
        ) : (
          <Link to="/cart">Cart</Link>
        )}
      </ul>
    </div>
  );
}
