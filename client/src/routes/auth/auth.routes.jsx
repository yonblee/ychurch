import RootElem from "@routes/root.elem";
import FindRoutes from "./find.routes";

const AuthRoutes = {
  path: "/auth/:paths",
  element: <RootElem />,
  children: [
    <FindRoutes />
  ]
};

export default AuthRoutes;
