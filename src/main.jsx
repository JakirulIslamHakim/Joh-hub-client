import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Route.jsx";
import AuthProver from "./Provider/AuthProver.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProver>
      <RouterProvider router={router} />
    </AuthProver>
  </React.StrictMode>
);
