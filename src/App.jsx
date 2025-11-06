// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";

// === Contexts ===
import { CartProvider } from "./context/CartContext";

// === Rutas principales ===
import AppRoutes from "./routes/AppRoutes";

// === Layout principal ===
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// === Estilos globales ===
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />
          <main style={{ flexGrow: 1 }}>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
