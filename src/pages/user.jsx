import { Dashboard } from "../layout/Dashboard";
import { logoutUser } from "../redux/Actions/userActions"; // Import action types
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    navigate("/login");
  }

  return (
    <Dashboard>
      <div className="USER">
        <div className="USER_container">
          <h1>User Details</h1>
          <h2>Email:{user.email}</h2>
          <h2>Admin:{user.isAdmin ? "Yes" : "No"}</h2>
          <button className="Button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </Dashboard>
  );
}
