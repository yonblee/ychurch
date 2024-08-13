import { lazy } from "react";
import RootElem from "./root.elem";
var AuthReset = lazy(() => import("@pages/auth/auth.reset"));
var AuthFind = lazy(() => import("@pages/auth/auth.find"));

const AuthRoutes = {
  path: "auth",
  element: <RootElem />,
  children: [
    {
      path: "reset",
      element: <AuthReset />,
    },
    {
      path: "find",
      element: <AuthFind />,
    },
  ],
};

export default AuthRoutes;
