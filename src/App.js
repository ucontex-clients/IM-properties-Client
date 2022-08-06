import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import HomePage from "./pages/HomePage";
import AllProperties from "./pages/AllProperties";
import PropertyDetails from "./pages/PropertyDetails";
import FullPropertyLayout from "./pages/FullPropertyLayout";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import { UserProfileModal } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<HomePage />}/>
        <Route path={'/signup'} element={<Signup />}/>
        <Route path={'/signin'} element={<Signin />}/>
        <Route path={'/properties'} element={<AllProperties />}/>
        <Route path={'/property'} element={<PropertyDetails />}/>
        <Route path={'/layout'} element={<FullPropertyLayout />}/>
        <Route path={'/about'} element={<Dashboard />}/>
        <Route path={'/payment'} element={<Payment />}/>
        <Route path={'/profile'} element={<UserProfileModal />}/>




      </Routes>
    </Router>

  );
}

export default App;
