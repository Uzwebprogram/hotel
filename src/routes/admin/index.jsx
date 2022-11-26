import { DataAdmin } from "./data-router"
import {Routes ,Route} from "react-router-dom"
function AdminRouterComponent() {

    return(
        <>
            <Routes>
                {DataAdmin.map((elem , index) =>
                    <Route key={index} path={elem.path}  element={elem.element} />
                )}
            </Routes>
        </>
    )
}
export default AdminRouterComponent