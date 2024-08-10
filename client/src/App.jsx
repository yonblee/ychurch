import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "@routes/index";
import { ThemeProvider, Toggle } from "@fluentui/react";
import { lightTheme, darkTheme } from "@components/ui/app.theme";
import { useState, useEffect, useCallback } from "react";

const router = createBrowserRouter(AppRoutes);
function App() {
  const [mode, setMode] = useState(false);

  function handleTheme() {
    setMode(!mode);
    window.localStorage.setItem("mode", mode);
  }

  useEffect(() => {
    let mode = Boolean(window.localStorage.getItem("mode"));
    setMode(mode)
  }, []);



  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme} applyTo="body">
      <RouterProvider router={router} />
      <Toggle
        label="Change themes"
        onText="Dark Mode"
        offText="Light Mode"
        onChange={handleTheme}
      />
    </ThemeProvider>
  );
}

export default App;
