import LoginRoutes from "./auth/login.routes";
import SignupRoutes from "./auth/signup.routes";
import RootElem from "./root.elem";

const AppRoutes = [
  {
    path: "/",
    element: <RootElem />,
    children: [
      SignupRoutes,
      LoginRoutes
    ]
  },
];
export default AppRoutes;
