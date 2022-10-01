import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import ProductDetails from "./containers/ProductPage/ProductDetails";
import ProductListening from "./containers/ProductListeing/ProductListening";

export default function App() {
  return (
    <div>
<Header/>
      <Routes>
        {/* <Route path="/" element={<Header/>} /> */}
        <Route path="/" element={<ProductListening/>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route> 404 Not Found!</Route>
      </Routes>
    </div>
  );
}
