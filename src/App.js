import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<HomePage />}/>
        <Route path={'/signup'} element={<Signup />}/>
        <Route path={'/signin'} element={<Signin />}/>
      </Routes>
    </Router>

  );
}

export default App;
