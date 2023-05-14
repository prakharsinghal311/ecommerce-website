import React from "react";

const CartContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
