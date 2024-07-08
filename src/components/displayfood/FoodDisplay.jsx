import React, { useContext } from "react";
import "./fooddisplay.css";
import { MyContext } from "./../../context/StoreContext";

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(MyContext);
    console.log(food_list)
  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-list">
        {food_list.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
