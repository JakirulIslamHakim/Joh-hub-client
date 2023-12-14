import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Route.jsx";
import AuthProver from "./Provider/AuthProver.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProver>
        <RouterProvider router={router} />
      </AuthProver>
    </QueryClientProvider>
  </React.StrictMode>
);
