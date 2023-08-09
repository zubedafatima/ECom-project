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
  total: +0,
};

export function cartReducer(state = initialCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + newItem.price,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    case CLEAR_CART:
      return {
        ...state,
        items: state.items.slice(0, 1), // Keep only the first object
        total: 0,
      };

    default:
      return state;
  }
}
