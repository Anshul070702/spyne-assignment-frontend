// Login.js
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { loginAPI } from "../utils/constants";
import Cookies from "js-cookie";
import { Mail, Lock, LogIn } from "lucide-react";

const loginAPI = "";
const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isLoggedIn) navigate("/home");
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    try {
      const response = await fetch(loginAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const responseData = await response.json();
      Cookies.set("accessToken", responseData.data.accessToken);
      Cookies.set("refreshToken", responseData.data.refreshToken);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-600 flex justify-center items-center p-6">
      <div className="bg-white/80 text-center p-8 rounded-3xl shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-semibold text-gray-800 mb-3">
          Welcome Back!
        </h1>
        <p className="text-gray-500">Log in to access your account</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-2xl focus:bg-white"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-2xl focus:bg-white"
              required
            />
            <label className="flex items-center cursor-pointer mt-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              Show Password
            </label>
          </div>

          <button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-4 rounded-2xl">
            <LogIn className="h-5 w-5 mr-2" />
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-8">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
