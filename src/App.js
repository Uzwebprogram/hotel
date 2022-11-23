import { useLocation } from "react-router-dom";
import "./App-styled.js";
import { DataAdmin } from "./routes/admin/data-router";
import ClientRouterComponent from "./routes/client/index.jsx";
import AdminRouterComponent from "./routes/admin/index.jsx";
function App() {
  const pathname = useLocation();
  const filter = DataAdmin.filter((e) => e.path === pathname.pathname);
  window.localStorage.setItem(
    "pathname",
    filter.map((elem) => elem.path)
  );
  return (
    <>
      {pathname.pathname === "/admin" ? (
        <>
          <AdminRouterComponent />
        </>
      ) : <ClientRouterComponent/> &&
        pathname.pathname === window.localStorage.getItem("pathname") ? 
        <AdminRouterComponent />
      : 
        <ClientRouterComponent/>
      }
    </>
  );
}

export default App;
