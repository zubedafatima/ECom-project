import { LOGIN_USER, LOGOUT_USER } from "../Actions/userActions";
//innitial object to avoid errors of undefined state in componenents
const initialUser = {
  users: [
    {
      id: 0,
      email: "",
      isAdmin: false,
      isLoggedIn: false,
    },
  ],
};

export function userReducer(state = initialUser, action) {
  switch (action.type) {
    case LOGIN_USER:
      // Appending the new user object to the existing array
      return {
        ...state,
        users: [...state.users, action.payload], // Assuming action.payload contains the new user object
      };

    case LOGOUT_USER:
      //removing all but the innitial state object

      return {
        ...state,
        users: state.users.slice(0, 1), // Keep only the first object
      };
    default:
      return state;
  }
}
