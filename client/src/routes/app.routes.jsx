import AuthRoutes from "./auth/auth.routes";
import LoginRoutes from "./auth/login.routes";
import SignupRoutes from "./auth/signup.routes";
import RootElem from "./root.elem";

const AppRoutes = [
  {
    path: "/",
    element: <RootElem />,
    children: [
      SignupRoutes,
      LoginRoutes,
      AuthRoutes
    ]
  },
];
export default AppRoutes;
