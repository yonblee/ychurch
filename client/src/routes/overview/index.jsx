import OverviewPage from "@pages/overview.page"
import MemberRoute from "./members.route"
import ExpenditureRoute from "./expenditures.route"
import ActivityRoute from "./activity.route"
import IncomeRoute from "./income.route"
import MeetingRoute from "./meeting.route"
import MemoRoute from "./memo.route"
import RequisitionRoute from "./requisition.route"
import PeopleRoute from "./people.route"
import TaskRoute from "./task.route"
import DepartmentRoute from "./department.route"

const OverviewRoutes = {
        path: "overview",
        element: <OverviewPage />,
        children: [
            MemberRoute,
            ExpenditureRoute,
            ActivityRoute,
            IncomeRoute,
            MeetingRoute,
            MemoRoute,
            RequisitionRoute,
            PeopleRoute,
            TaskRoute,
            DepartmentRoute
        ]
    }

export default OverviewRoutes