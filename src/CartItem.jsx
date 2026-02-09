import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalAmount,
  selectTotalQuantity,
  incrementQty,
  decrementQty,
  removeFromCart
} from "./redux/CartSlice";
import "./App.css";

function Navbar() {
  const totalQty = useSelector(selectTotalQuantity);

  return (
    <div className="navbar">
      <div className="navBrand">Paradise Nursery</div>
      <

