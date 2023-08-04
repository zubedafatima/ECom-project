import { REGISTER_USER, REMOVE_USER } from "../Actions/registerActions";

//innitial object to avoid errors of undefined state in componenents
const initialUser = {
  users: [
    {
      id: 0,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      isLoggedIn: false,
    },
  ],
};

export function registerReducer(state = initialUser, action) {
  switch (action.type) {
    case REGISTER_USER:
      // Appending the new user object to the existing array
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case REMOVE_USER:
      //removing all but the innitial state object

      return {
        ...state,
        users: state.users.slice(0, 1), // Keep only the first object
      };
    default:
      return state;
  }
}
