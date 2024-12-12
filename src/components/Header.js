import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Contact us</li>
          <li>Cart</li>
          <li>
            {" "}
            <button
              className="login-btn"
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
