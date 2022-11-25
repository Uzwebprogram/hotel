import { DataClient } from "./data-router"
import { Routes, Route } from "react-router-dom"
import Header from "../../components/client/Header"
import Footer from "../../components/client/Footer"
import Home from "../../components/client/Home/home-hero"
function ClientRouterComponent() {
    return (
        <>
            <Header />
            <Home/>
            <Routes>
                {DataClient.map((elem, index) =>
                    <Route key={index} path={elem.path} element={elem.element} />
                )}
            </Routes>
            <Footer />
        </>
    )
}
export default ClientRouterComponent