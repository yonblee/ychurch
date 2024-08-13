import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FluentProvider, Switch, ToggleButton, webLightTheme, webDarkTheme} from "@fluentui/react-components";
import AppRoutes from "@routes/app.routes";
import { useState } from "react";

const router = createBrowserRouter(AppRoutes);

function App() {
  const [mode, setMode] = useState(true);
  function handleMode() {
    setMode(!mode)
  }
  return (
    <FluentProvider theme={mode ? webLightTheme : webDarkTheme}>
      {/* <Switch onClick={handleMode} label="This is a switch"/> */}
      <RouterProvider router={router} />
    </FluentProvider>
  );
}

export default App;
