import CreateRoutes from "./create.route"

const BusinessRoutes = {
    path: "business", 
    children: [
        CreateRoutes
    ]
}

export default BusinessRoutes