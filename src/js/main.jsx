import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavbarComponent />
    <Home />
    <FooterComponent />
  </React.StrictMode>
);
