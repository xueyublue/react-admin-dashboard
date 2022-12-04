import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { useEffect } from "react";
import User from "./pages/user/User";
import NewUser from "./pages/userUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

function App() {
  const history = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname && pathname === "/") {
      history("/home");
    }
  });
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/users/:userId" element={<User />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/users/add" element={<NewUser />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<ProductList />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
