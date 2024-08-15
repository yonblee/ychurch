import HomePage from "@pages/home/home.page";
import RootElem from "./root.elem";

const AppRoutes = [
  {
    path: "/",
    element: <RootElem />,
    children: [
      {index: true, element: <HomePage />}
    ]
  },
];
export default AppRoutes;
