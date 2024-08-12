import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "@routes/index";
import { ThemeProvider } from "@fluentui/react";
import appTheme from "@components/ui/theme.ui";

const router = createBrowserRouter(AppRoutes);

function App() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeProvider theme={appTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
