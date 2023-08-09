import { Dashboard } from "../layout/Dashboard";
import { logoutUser } from "../redux/Actions/userActions"; // Import action types
import { clearCart } from "../redux/Actions/cartActions"; // Import action types
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Styles/loginStyle.css";

export function User() {
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (userLogged.users.length === 0) {
    navigate("/login");
  }
  const length = userLogged.users.length - 1;
  const user = userLogged.users[length];

  function handleLogout() {
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/login");
  }

  return (
    <Dashboard>
      <div className="Login">
        <div className="Container">
          <h2>User Details</h2>
          <br />
          <span className="login-Head">Email: {user.email}</span>
          <br />
          <span className="login-Head">
            Admin: {user.isAdmin ? "Yes" : "No"}
          </span>
          <br />
          <button className="Button-LS" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </Dashboard>
  );
}
