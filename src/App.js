import "./app.css";
import { useContext } from "react";
import {AuthContext} from "./context/authContext/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./pages/login/Login";
import LayoutContainer from "./components/_layoutcontainer/LayoutContainer";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
        <Routes>
          <Route exact path="/login" element={user? <Navigate to="/"/> : <Login />}/>
          <Route path="/*" element={user? <LayoutContainer /> : <Navigate to="/login"/>}/>
        </Routes>
    </Router>
  );
}

export default App;
