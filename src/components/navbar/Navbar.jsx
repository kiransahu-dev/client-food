import React, { useState } from "react";
import { assets } from "./../../assets/assets";
import "../navbar/navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => {setMenu("home")}} className={menu === "home" ? "active" : "" }>Home</li>
        <li onClick={() => {setMenu("menu")}} className={menu === "menu" ? "active" :"" }>Menu</li>
        <li onClick={() => {setMenu("mobile-app")}} className={menu === "mobile-app" ? "active" :"" }>Mobile app</li>
        <li onClick={() => {setMenu("contact")}} className={menu === "contact" ? "active" :"" }>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className="">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
