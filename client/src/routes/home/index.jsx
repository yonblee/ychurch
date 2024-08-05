import HomePage from "@pages/home.page"
import SummaryPage from "@pages/summary.pages"

const HomeRoutes = {
       path: "/",
       element: <HomePage />,
       children: [
        {
            path: "summary",
            element: <SummaryPage />
        }
       ]
}


export default HomeRoutes