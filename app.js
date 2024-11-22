import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105902/1753.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const ResturantCard = ()=>{
  return(
    <div className="res-card">
      <img className="res-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="Res Logo" />
      <h3 className="res-name">Dada Boudi Biriyani</h3>
    </div>
  )
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        <ResturantCard/>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
