import AuthRoutes from "./auth";
import BusinessRoutes from "./business";
import HomeRoutes from "./home";
import OverviewRoutes from "./overview";
import SearchRoutes from "./search";
import StartRoutes from "./start.route";
import Root from "./Root";

const AppRoutes = [
  {
    path: '/',
    element: <Root />,
    children: [
      HomeRoutes,
      AuthRoutes,
      SearchRoutes,
      StartRoutes,
      BusinessRoutes,
      OverviewRoutes
    ]
}
];

export default AppRoutes;