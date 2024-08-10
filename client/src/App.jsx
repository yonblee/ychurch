import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "@routes/index";
import { ThemeProvider, Toggle } from "@fluentui/react";
import { lightTheme, darkTheme } from "@components/ui/app.theme";
import { useState, useEffect } from "react";

const router = createBrowserRouter(AppRoutes);
function App() {
  const [mode, setMode] = useState(true);
  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme} applyTo="body">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
