export const REGISTER_USER = "REGISTER_USER";
export const REMOVE_USER = "REMOVE_USER";
export const LOGIN_REG = "LOGIN_REG";

//returning an action object
export const registerUser = (id, firstname, lastname, email, password) => ({
  type: REGISTER_USER,
  payload: {
    id,
    firstname,
    lastname,
    email,
    password,
    isLoggedIn: false,
  },
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
