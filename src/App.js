import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchModal from "./components/SearchModal";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Collections from "./pages/Collections";
import Thrifts from "./pages/Thrifts";
import MarsBrands from "./pages/MarsBrands";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/searchmodal" element={<SearchModal />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/thrifts" element={<Thrifts />} />
          <Route path="/marsbrands" element={<MarsBrands />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
