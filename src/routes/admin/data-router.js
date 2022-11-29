import Dashboard from "../../pages/admin/dashboard";
import Login from "../../pages/admin/login";
import Gallery from "../../pages/admin/gallery";
import Number from "../../pages/admin/number";
import Contacts from "../../pages/admin/contacts";
import OurHotel from "../../pages/admin/our-hotel";
import News from "../../pages/admin/news";
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
    },
    {
        id : 4,
        path : "/admin/hotelabout",
        element : <OurHotel/>
    },
    {
        id : 5,
        path : "/admin/number",
        element : <Number/>
    },
    {
        id : 6,
        path : "/admin/news",
        element : <News/>
    },
    {
        id : 7,
        path : "/admin/contacts",
        element : <Contacts/>
    }
]