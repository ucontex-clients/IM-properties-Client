import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import HomePage from "./pages/HomePage";
import AllProperties from "./pages/AllProperties";
import PropertyDetails from "./pages/PropertyDetails";
import FullPropertyLayout from "./pages/FullPropertyLayout";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import { PaymentAccountDetail, UserProfileModal } from "./components";
import AddPlot from "./pages/AddPlot";
import About from "./pages/About";
import UploadPropertyInfo from "./pages/UploadPropertyInfo";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactPage";
import FAQ from "./pages/FAQ";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/register"} element={<Signup />} />
        <Route path={"/login"} element={<Signin />} />
        <Route path={"/properties"} element={<AllProperties />} />
        <Route path={"/properties/:id"} element={<PropertyDetails />} />
        {/* <Route path={"/property"} element={<PropertyDetails />} /> */}
        <Route path={"/blog"} element={<BlogPage />} />
        <Route path={"/contact"} element={<ContactUs />} />
        <Route path={"/FAQ"} element={<FAQ />} />
        <Route path={"/layout"} element={<FullPropertyLayout />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/profile"} element={<UserProfileModal />} />
        <Route path={"/add"} element={<AddPlot />} />
        <Route path={"/upload"} element={<UploadPropertyInfo />} />
        <Route path={"/Admin1"} element={<SuperAdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
