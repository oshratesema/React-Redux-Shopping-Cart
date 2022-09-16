import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListening from "./containers/ProductListening";

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
