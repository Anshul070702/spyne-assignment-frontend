import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Login from "./Pages/LogIn.jsx";
import Signup from "./Pages/SignUp.jsx";
import Home from "./Pages/Home.jsx";
import AddCars from "./Pages/AddCars.jsx";
import Cars from "./Pages/Cars.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-cars" element={<AddCars />} />
        <Route path="/cars" element={<Cars />} />
        {/* Redirect all unmatched routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
