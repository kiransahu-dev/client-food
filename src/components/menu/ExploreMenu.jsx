import React from "react";
import "./exploremenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="text-menu">
        Choose from a diverse menue featuring a delectable array of dishes
        crafted with the finest ingradients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience
      </p>
      <div className="menu-list">
        {menu_list.map((list, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === list.menu_name ? "All" : list.menu_name
                );
              }}
              key={index}
              className="menu-list-item"
            >
              <img
                className={category === list.menu_name ? "active" : ""}
                src={list.menu_image}
                alt="listiamge"
              />
              <p>{list.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
