import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../Actions/cartActions";

const initialCart = {
  items: [
    {
      id: "",
      title: "",
      price: "",
      image: "",
    },
  ],
};

export function cartReducer(state = initialCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: state.items.slice(0, 1), // Keep only the first object
      };
    default:
      return state;
  }
}
