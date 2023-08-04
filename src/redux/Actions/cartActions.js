export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

//returning an action object
export const addToCart = (id, title, price, image) => ({
  type: ADD_TO_CART,
  payload: { id, title, price, image },
});

//an action object returning
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
