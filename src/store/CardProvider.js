import { useState } from "react";
import CartContext from "./cart-context";

const CardProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCardHandler = (item) => {
    setItems([...items, item]);
  };

  const removeItemFromCardHandler = (id) => {
    const updatedCartElements = items.filter((element) => element.id !== id);
    setItems(updatedCartElements);
  };

  const cartContext = {
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
