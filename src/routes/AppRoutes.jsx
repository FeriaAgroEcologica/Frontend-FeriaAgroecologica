import React from "react";
import { Routes, Route } from "react-router-dom";

// === Pages ===
import Home from "../pages/Home/Home";
import Productores from "../pages/Productores/Productores";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import CartPage from "../pages/Cart/CartPage";
import Blog from "../pages/Blog/Blog";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound";

// === Components ===
import PrivateRoute from "../components/common/PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* === Páginas públicas === */}
      <Route path="/" element={<Home />} />
      <Route path="/productores" element={<Productores />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/blog" element={<Blog />} />

      {/* === Ruta protegida === */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* === Página 404 === */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
