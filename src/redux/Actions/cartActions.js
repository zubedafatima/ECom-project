export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTAL = "GET_TOTAL";
//returning an action object
export const addToCart = (id, title, price, image) => ({
  type: ADD_TO_CART,
  payload: { id, title, price, image },
});

//an action object returning
export const removeFromCart = (id, price) => ({
  type: REMOVE_FROM_CART,
  payload: { id, price },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
