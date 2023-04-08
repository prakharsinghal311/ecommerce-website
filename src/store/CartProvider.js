import { useState } from "react";
import CartContext from "./cart-context";

const CardProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCardHandler = (item) => {
    const existingItemIndex = items.findIndex((i) => i.id === item.id);

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
