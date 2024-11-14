import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// import { useState, useEffect } from "react";

const Navbar = ({ login, setLogin }) => {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const accessToken = Cookies.get("accessToken");
  //   setIsLoggedIn(!!accessToken);
  // }, []);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    // setIsLoggedIn(false);
    setLogin(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-6 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Home Link on the Left */}
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-cyan-400 text-gray-800 px-3 py-2 text-lg font-bold rounded-md"
                : "text-white text-lg font-bold hover:bg-cyan-500 hover:text-gray-800 px-3 py-2 rounded-md"
            }
          >
            Home
          </NavLink>
        </div>

        {/* Other Links on the Right */}
        <div className="flex items-center space-x-4">
          {login && (
            <>
              <NavLink
                to="/cars"
                className={({ isActive }) =>
                  isActive
                    ? "bg-cyan-400 text-gray-800 px-3 py-2 text-lg font-bold rounded-md"
                    : "text-white text-lg font-bold hover:bg-cyan-500 hover:text-gray-800 px-3 py-2 rounded-md"
                }
              >
                Cars
              </NavLink>

              <NavLink
                to="/add-cars"
                className={({ isActive }) =>
                  isActive
                    ? "bg-cyan-400 text-gray-800 px-3 py-2 text-lg font-bold rounded-md"
                    : "text-white text-lg font-bold hover:bg-cyan-500 hover:text-gray-800 px-3 py-2 rounded-md"
                }
              >
                Add Cars
              </NavLink>
            </>
          )}

          {!login ? (
            <>
              <NavLink
                to="/signup"
                className="text-white font-bold text-lg hover:bg-indigo-500 px-3 py-2 rounded-md"
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                className="bg-indigo-500 text-lg font-bold hover:bg-indigo-600 text-white px-4 py-2 transition-all rounded-md"
              >
                Log In
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-lg font-bold hover:bg-red-600 text-white px-4 py-2 transition-all rounded-md"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
