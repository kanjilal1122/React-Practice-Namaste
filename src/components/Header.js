import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
import Button from "./Button";
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
            <Button onClick={() => dispatch(addItem())}>Add+</Button>
          </li>
          <li className="p-2 cursor-pointer font-bold">
            <Button onClick={() => dispatch(removeItem())}>Remove</Button>
          </li>
          <li className="p-2 cursor-pointer font-bold">
            {" "}
            <Button onClick={() => dispatch(clearCart())}>Clear</Button>
          </li>
          <li className="p-2 cursor-pointer">
            {" "}
            <Button
              onClick={() => {
                {
                  isLogin === "Login"
                    ? setIsLogin("Logout")
                    : setIsLogin("Login");
                }
              }}
            >
              {isLogin}
            </Button>
          </li>
          <li className="p-2 cursor-pointer">{userDefaultName.loggedUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
