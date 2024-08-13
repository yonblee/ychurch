import LoginRoutes from "./login.routes";
import SignupRoutes from "./signup.routes";
import RootElem from "./root.elem";
import AuthRoutes from "./auth.routes";

const AppRoutes = [
  {
    path: "/",
    element: <RootElem />,
    children: [SignupRoutes, LoginRoutes, AuthRoutes],
  },
];
export default AppRoutes;
