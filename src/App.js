import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/About";
import Store from "./pages/Store";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs";
import CardProvider from "./store/CartProvider";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <CardProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Store />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/:productId" element={<ProductDetail />} />
              <Route path="/ContactUS" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CardProvider>
    </>
  );
};

export default App;
