import { createContext } from "react";
import { food_list } from "../assets/assets"

export const MyContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {
    food_list
  };
  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};

export default StoreContextProvider;
