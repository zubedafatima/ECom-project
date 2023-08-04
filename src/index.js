import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// persist wala code
//import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// let persistor = persistStore(store);
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <PersistGate persistor={persistor}>
//           <App />
//         </PersistGate>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );
