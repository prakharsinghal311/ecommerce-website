import { useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CardProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCardHandler = (item) => {
    const existingItemIndex = items.findIndex(
      (i) => i.productId === item.productId
    );
    if (existingItemIndex === -1) {
      setItems([...items, item]);
    } else {
      const temp = [...items];
      temp[existingItemIndex].quantity =
        parseInt(temp[existingItemIndex].quantity) + parseInt(item.quantity);
      setItems(temp);
    }
  };

  const removeItemFromCardHandler = (id) => {
    const existingItemIndex = items.findIndex((i) => i.id === id);

    const existingItem = items[existingItemIndex];
    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = items.filter((item) => item.id !== id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: Number(existingItem.quantity) - 1,
      };
      updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    setItems(updatedItems);
  };

  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const cartContext = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    items: items,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;
