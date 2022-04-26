import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Abhishek from "./profile";
import Form from "./Form.jsx";
import Calculator from "./Calculator.jsx";
import Calci from "./calci.jsx";
import FunCalci from "./Functioncalci.jsx";
import ValidateData from "./Formvalidation.jsx";
import Fizzbuzz from "./fizzbuzz.jsx";
import AddToCart from "./addtocart";
import APIcalling from "./APIcalling";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>
  // <Form />
  // <Calci />
  // <FunCalci />
  // <ValidateData />
  // <Fizzbuzz />
  <APIcalling />
);
