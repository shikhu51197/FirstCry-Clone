import React from "react";
import { Routes, Route } from "react-router-dom";

import UserManagement from "../AdminPanel/UserManagement";
import Deshboard from "./../AdminPanel/Deshboard";
import OrderManagement from "./../AdminPanel/OrderManagement";
import Admin from "../AdminPanel/Admin";
import Adminlogin from "../AdminPanel/Adminlogin";
import Cart from "../Components/Cart/Cart";
import Home from "../HomePage/Home";
import MyAccountPages from "../MyAccountPages/MyAccountPages";
import ProductPages from "../ProductPages/ProductPages";
import SingleProductPage from "../SingleProductPage/SingleProductPage";
import Login from "../Registration/Login";
import Signup from "../Registration/Signup";
import { PrivateRoute } from "../Pages/privateRoute";
import Otp from "../Components/Otp";
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/singleproduct/:id" element={<SingleProductPage />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <MyAccountPages />
            </PrivateRoute>
          }
        />
        <Route path="/product" element={<ProductPages />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/deshboard" element={<Deshboard />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/ordermanagement" element={<OrderManagement />} />
        <Route path="/otp" element={<Otp />} />
        <Route />
        <Route />
      </Routes>
    </div>
  );
};

export default MainRoute;
