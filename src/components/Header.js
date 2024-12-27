import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");
  const isOnline = useOnlineStatus();
  const userDefaultName = useContext(UserContext)
  console.log(userDefaultName);
  
  return (
    <div className="flex justify-between bg-slate-100 border-black border-solid border-2 shadow-xl ">
      <div className="w-20 ">
        <img className=" mix-blend-multiply" src={LOGO_URL} alt="Logo" />
      </div>
      <nav className="flex justify-between p-4">
        <ul className="flex">
          <li className="p-2 ">Online Status : {isOnline ? " ✔" : "❌"} </li>
          <li className="p-2 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 cursor-pointer">
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li className="p-2 cursor-pointer">
            <Link to="/contacts">Contact us</Link>
          </li>
          <li className="p-2 cursor-pointer">Cart</li>
          <li className="p-2 cursor-pointer">
            {" "}
            <button
              className=" bg-slate-100 px-2   border-green-300 border-solid border-2 rounded-full shadow-lg"
              onClick={() => {
                {
                  isLogin === "Login"
                    ? setIsLogin("Logout")
                    : setIsLogin("Login");
                }
              }}
            >
              {isLogin}
            </button>
          </li>
          <li className="p-2 cursor-pointer">{userDefaultName.loggedUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
