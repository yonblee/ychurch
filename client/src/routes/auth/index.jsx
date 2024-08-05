import FindRoutes from "./find.routes";
import LoginRoute from "./login.route";
import LogoutRoute from "./logout.route";
import ResetRoutes from "./reset.route";
import SignupRoutes from "./signup.route";

const AuthRoutes = {
  path: 'auth',
  children: [
    LoginRoute,
    LogoutRoute,
    SignupRoutes,
    FindRoutes,
    ResetRoutes,
  ]
}

export default AuthRoutes;