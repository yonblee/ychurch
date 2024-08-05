import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./routes";

const router = createBrowserRouter(AppRoutes)

const App = () => {
  useEffect(() => {
    let mode = window.localStorage.getItem("mode")
    ui("mode", mode);
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
