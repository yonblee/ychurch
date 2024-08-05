import FindAccount from "@pages/account/find/find.account";
import ResetPassword from "@pages/account/reset/reset.password";
import Home from "@pages/home.page";
import RolePage from "@pages/role.pages";
import SearchPage from "@pages/search.pages";
import Signin from "@pages/signin.pages";
import Signup from "@pages/signup.pages";
import SummaryPage from "@pages/summary.pages";
import Upgrade from "@pages/upgrade.pages";
import WelcomePage  from "@pages/start.page";
import { createBrowserRouter } from "react-router-dom";

const Routers = createBrowserRouter([
    
    {
        path: "u",
        children: [
            {
                path: "role",
                element: <RolePage />
            }
        ]
    },
    {
        path: "account",
        children: [
           {
                path: "find",
                element: <FindAccount />
           },
           {
                path: "reset",
                element: <ResetPassword />
           },

        ]
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/search",
        element: <SearchPage />
    },
    {
        path: "/welcome",
        element: <WelcomePage />,
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/upgrade",
        element: <Upgrade />
    },
])

export default Routers