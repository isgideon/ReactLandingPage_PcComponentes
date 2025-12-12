import React from "react";

const NavbarComponent = () => (
  <nav
    className="navbar navbar-expand-sm navbar-dark md-6-navbar"
    style={{ backgroundColor: "#ff8838ff" }}
  >
    <a className="navbar-brand py-2 px-4" href="#home">
      PC Componentes
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse px-2" id="navbarNav">
      <ul className="navbar-nav ms-auto me-4">
        <li className="nav-item active">
          <a className="nav-link active" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#components">
            Componentes
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contacto
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            Nosotros
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavbarComponent;
