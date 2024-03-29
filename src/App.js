import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
// import Signin from "./pages/signin";
import HomePage from "./pages/HomePage";
import AllProperties from "./pages/AllProperties";
import PropertyDetails from "./pages/PropertyDetails";
import FullPropertyLayout from "./pages/FullPropertyLayout";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import {
  DashboardProperty,
  DashboardPropertyDetail,
  FundWalletCreateAccount,
  PaymentAccountDetail,
  UserProfileModal,
} from "./components";
import AddPlot from "./pages/AddPlot";
import About from "./pages/About";
import UploadPropertyInfo from "./pages/UploadPropertyInfo";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactPage";
import FAQ from "./pages/FAQ";
// import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import DashboardHomePage from "./pages/DashboardHomePage";
import DashboardBuyPage from "./pages/DashboardBuyPage";
import DashboardBookingPage from "./pages/DashboardBookingPage";
import DashboardMyPropertyPage from "./pages/DashboardMyPropertyPage";
import DashboardPaymentPage from "./pages/DashboardPaymentPage";
import DashboardTransactionPage from "./pages/DashboardTransactionPage";
import DashboardSupportPage from "./pages/DashboardSupportPage";
import DashboardSettingsPage from "./pages/DashboardSettings";
import DashboardProfilePage from "./pages/DashboardProfilePage";
import DashboardReferralPage from "./pages/DashboardReferralPage";
import Login from "./pages/login";
import EditProfile from "./pages/EditProfile";
import "./assets/css/mobile.css";
import FundWalletPage from "./pages/DashboardWalletPage";
import EspPage from "./pages/EspPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/account/register"} element={<Signup />} />
        <Route path={"/ESP"} element={<EspPage />} />
        <Route path={"/account/login"} element={<Login />} />
        {/* <Route path={"/login"} element={<Signin />} /> */}
        <Route path={"/properties"} element={<AllProperties />} />
        <Route path={"/properties/single/:id"} element={<PropertyDetails />} />
        {/* <Route path={"/property"} element={<PropertyDetails />} /> */}
        <Route path={"/blog"} element={<BlogPage />} />
        <Route path={"/contact"} element={<ContactUs />} />
        <Route path={"/FAQ"} element={<FAQ />} />
        <Route path={"/layout/:id"} element={<FullPropertyLayout />} />
        <Route path={"/dashboard"} element={<EditProfile />} />
        <Route path={"/dashboard/profile/edit"} element={<EditProfile />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/profile"} element={<UserProfileModal />} />
        <Route path={"/add"} element={<AddPlot />} />
        <Route path={"/upload"} element={<UploadPropertyInfo />} />
        {/* <Route path={"/Admin1"} element={<SuperAdminDashboard />} /> */}
        <Route path={"/dashboard/home"} element={<DashboardHomePage />} />
        <Route
          path={"/dashboard/buy-property"}
          element={<DashboardBuyPage />}
        />
        <Route
          path={"/dashboard/bookings"}
          element={<DashboardBookingPage />}
        />
        <Route
          path={"/dashboard/network"}
          element={<DashboardReferralPage />}
        />
        <Route
          path={"/dashboard/my-property"}
          element={<DashboardMyPropertyPage />}
        />
        <Route path={"/dashboard/payment"} element={<DashboardPaymentPage />} />
        <Route
          path={"/dashboard/transactions"}
          element={<DashboardTransactionPage />}
        />
        <Route path={"/dashboard/support"} element={<DashboardSupportPage />} />
        <Route
          path={"/dashboard/settings"}
          element={<DashboardSettingsPage />}
        />
        <Route path={"/dashboard/wallet"} element={<FundWalletPage />} />
        <Route path={"/dashboard/profile"} element={<DashboardProfilePage />} />
        <Route
          path={"/dashboard/my-property/detail"}
          element={<DashboardPropertyDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
