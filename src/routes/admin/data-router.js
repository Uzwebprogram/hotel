import Dashboard from "../../pages/admin/dashboard";
import Login from "../../pages/admin/login";
import Gallery from "../../pages/admin/gallery";

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
    },
    {
        id : 3,
        path : "/admin/gallery",
        element : <Gallery/>
    }
]