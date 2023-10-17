import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./locales/i18n";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCFWWh6LG1e3KyFUuH4ez_5s9iew13jr6I",
  authDomain: "gherbel-d3c67.firebaseapp.com",
  projectId: "gherbel-d3c67",
  storageBucket: "gherbel-d3c67.appspot.com",
  messagingSenderId: "191630025328",
  appId: "1:191630025328:web:d6117d43a37f31086c0ab5",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <App />
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
