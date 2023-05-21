import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import AboutPage from "./pages/About";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs";
import CardProvider from "./store/CartProvider";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./pages/PrivateRoute";
import Login from "./pages/Login";
import LowerCard from "./components/UI/LowerCard";

const App = () => {
  return (
    <>
      <CardProvider>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/" element={<PrivateRoute />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/:productId" element={<ProductDetail />} />
            <Route path="/ContactUS" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <LowerCard className={classes.lowerCard} />
        </BrowserRouter>
      </CardProvider>
    </>
  );
};

export default App;
