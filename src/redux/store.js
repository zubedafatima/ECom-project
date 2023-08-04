import { createStore, combineReducers } from "redux";
import { userReducer } from "./Reducers/userReducer";
import { registerReducer } from "./Reducers/registerReducer";
import { cartReducer } from "./Reducers/cartReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { EncryptTransform } from "../components/crypto";

const persistConfig = {
  key: "root",
  storage,
  transforms: [EncryptTransform], // Add the custom transform here
};

const rootReducer = combineReducers({
  user: userReducer,
  // userReg: registerReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //For the devtoll kit extension on chrome
);

export default store;

//persist wala code
// import { cartReducer } from "./Reducers/cartReducer";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   user: userReducer,
//   userReg: registerReducer,
//   cart: cartReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //For the devtoll kit extension on chrome
// );
