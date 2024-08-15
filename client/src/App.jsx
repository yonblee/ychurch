import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
} from "@fluentui/react-components";
import AppRoutes from "@routes/app.routes";
import { useState } from "react";

const router = createBrowserRouter(AppRoutes);

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <RouterProvider router={router} />
    </FluentProvider>
  );
}

export default App;
