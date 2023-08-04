export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

//returning an action object
export const loginUser = (id, email, isAdmin) => ({
  type: LOGIN_USER,
  payload: { id, email, isAdmin, isLoggedIn: true },
});

//an action object returning
export const logoutUser = () => ({
  type: LOGOUT_USER,
});
