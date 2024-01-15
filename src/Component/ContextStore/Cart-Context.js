
import React from "react";

export const CartContext = React.createContext({
  cartItems: [],
  TotalPrice: 0,
  addToCart: () => { },
  deleteFromCart: () => { },
})