import React, { useState } from "react";
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
  const [login, setLogin] = useState(false);
  return (
    <Router>
      <Navbar login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/signup" element={<Signup />} />
        {login && <Route path="/add-cars" element={<AddCars />} />}
        {login && <Route path="/cars" element={<Cars />} />}
        {/* Redirect all unmatched routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
