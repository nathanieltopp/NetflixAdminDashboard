import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";


function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact  path="/users" element={<UserList />}/>
          <Route exact  path="/users/:userid" element={<User />}/>
          <Route exact  path="/newUser" element={<NewUser />}/>
          <Route exact  path="/products" element={<ProductList />}/>
          <Route exact  path="/products/:productid" element={<Product />}/>
          <Route exact  path="/newProduct" element={<NewUser />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
