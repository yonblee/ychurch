import SignupRoutes from "@routes/auth/signup.route";
import Root from "./root";

const AppRoutes = [
  {
    path: "/",
    element: <Root />,
    children: [
      SignupRoutes
    ]
  },
];
export default AppRoutes;
