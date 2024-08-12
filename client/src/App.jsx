import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "@routes/app.routes";
import { ThemeProvider, Toggle } from "@fluentui/react";
import { lightTheme, darkTheme } from "@components/ui/app.theme";
import { useState } from "react";

const router = createBrowserRouter(AppRoutes);

function App() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme} applyTo="body">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
