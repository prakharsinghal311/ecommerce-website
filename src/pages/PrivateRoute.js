import React, { useContext } from "react";
import Login from "./Login";
import Store from "./Store";
import CartContext from "../store/cart-context";

const PrivateRoute = () => {
  const authCtx = useContext(CartContext);
  return authCtx.isLoggedIn ? <Store /> : <Login />;
};

export default PrivateRoute;
