import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { useEffect } from "react";

function App() {
  const history = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname && pathname === "/") {
      history("/home");
    }
  }, []);
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
