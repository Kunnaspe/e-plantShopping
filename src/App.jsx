import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landingCard">
        <div className="landingHeader">
          <div>
            <h1 style={{ margin: 0 }}>Paradise Nursery</h1>
            <p className="muted" style={{ marginTop: "0.5rem" }}>
              Fresh houseplants for every home — curated by category, easy to shop.
            </p>
          </div>

          <button className="btnPrimary" onClick={() => navigate("/plants")}>
            Get Started
          </button>
        </div>

        <hr style={{ margin: "1.5rem 0", border: "none", borderTop: "1px solid #ddd" }} />

        <p style={{ margin: 0 }}>
          New here? Learn more on our <Link to="/about">About Us</Link> page or jump straight to{" "}
          <Link to="/plants">Plants</Link>.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

