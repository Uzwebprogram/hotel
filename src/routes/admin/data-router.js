import Dashboard from "../../pages/admin/dashboard";
import Login from "../../pages/admin/login";


export const DataAdmin = [
    {
        id : 1,
        path : "/admin",
        element : <Login/>
    },
    {
        id : 2,
        path : "/admin/dashboard",
        element : <Dashboard/>
    }
]