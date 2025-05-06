//this function is for managing and fetching the menu data from the backend
import React, { createContext, useState } from "react";
import { product } from "../assets/assets";

export const MenuContext = createContext();
const MenuContextProvider = ({ children }) => {
  const [products, setProducts] = useState(product);

  return (
    <MenuContext.Provider value={{ products }}>{children}</MenuContext.Provider>
  );
};
export default MenuContextProvider;