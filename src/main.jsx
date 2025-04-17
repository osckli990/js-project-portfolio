import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.jsx";
// { } if exported directly in function
//else imporn App from...

import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//main is a recipe and should not be changed
