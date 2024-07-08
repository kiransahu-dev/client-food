import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menue featuring a delectable array of dishes
          crafted with the finest ingradients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining experience
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Header;
