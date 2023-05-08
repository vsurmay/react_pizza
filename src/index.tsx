import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store";
// import firebase

import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";

import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCc21-dZnV3dzbU5PHXh_PyNs0axe10kLE",
  authDomain: "react-pizza-e65e9.firebaseapp.com",
  projectId: "react-pizza-e65e9",
  storageBucket: "react-pizza-e65e9.appspot.com",
  messagingSenderId: "523930320306",
  appId: "1:523930320306:web:d06a381e57ebacd8baf8ab",
  measurementId: "G-F9JWWMV8G0",
};

// initializeapp
initializeApp(firebaseConfig);
