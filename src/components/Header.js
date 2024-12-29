import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");
  const isOnline = useOnlineStatus();
  const userDefaultName = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between bg-slate-100 border-black border-solid border-2 shadow-xl ">
      <div className="w-20">
        <Link to="/">
          {" "}
          <img className=" mix-blend-multiply" src={LOGO_URL} alt="Logo" />{" "}
        </Link>
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
          <li className="p-2 cursor-pointer font-bold">
            Cart{cartItems.length}
          </li>
          <li className="p-2 cursor-pointer font-bold">
            {" "}
            <button
              className=" bg-slate-100 px-2   border-green-300 border-solid border-2 rounded-full shadow-lg"
              onClick={() => dispatch(addItem())}
            >
              {" "}
              Add+
            </button>
          </li>
          <li className="p-2 cursor-pointer font-bold">
            {" "}
            <button
              className=" bg-slate-100 px-2   border-green-300 border-solid border-2 rounded-full shadow-lg"
              onClick={() => dispatch(removeItem())}
            >
              Remove
            </button>
          </li>
          <li className="p-2 cursor-pointer font-bold">
            {" "}
            <button
              className=" bg-slate-100 px-2   border-green-300 border-solid border-2 rounded-full shadow-lg"
              onClick={() => dispatch(clearCart())}
            >
              Clear
            </button>
          </li>
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
