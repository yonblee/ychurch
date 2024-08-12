import RootElem from "@routes/root.elem";
import FindRoutes from "./find.routes";
import ResetRoutes from "./reset.routes";

const AuthRoutes = {
  path: "/auth/:paths",
  element: <RootElem />,
  children: [
    <FindRoutes />,
    <ResetRoutes/>
  ]
};

export default AuthRoutes;
