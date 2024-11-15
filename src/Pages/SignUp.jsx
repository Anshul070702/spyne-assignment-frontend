// Signup.js
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { User, Mail, Lock, LogIn } from "lucide-react";
import { registerUser } from "../Constants/Api";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { userName, email, password };

    try {
      const response = await axios.post(registerUser, data, {
        headers: { "Content-Type": "application/json" },
      });
      Cookies.set("accessToken", response.data.data.accessToken);
      Cookies.set("refreshToken", response.data.data.refreshToken);
      toast.success("Account created successfully!");
      setIsLoggedIn(true);
    } catch (error) {
      if(error.response.data?.message){
        toast.error(error.response.data?.message);
      }
      else toast.error("Their was a problem with the server please try again");
      console.error("There was a problem with your signup request:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-700 p-6">
      <div className="bg-white/80 text-center p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome!</h1>
        <p className="text-gray-500 mb-6">Create an account to get started</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="userName"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-2xl focus:bg-white"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-2xl focus:bg-white"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-2xl focus:bg-white"
              required
            />
          </div>

          <button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-4 rounded-2xl flex items-center justify-center space-x-2">
            <LogIn className="h-5 w-5" />
            <span>Sign Up</span>
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
