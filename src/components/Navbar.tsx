import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <h1>PORTFOLIO / Delia Gherardi</h1>
      </div>
      <nav>
        <ul className="navbar-links">
          <li className="navbar-link">
            <Link to="/about" aria-label="About">
              About
            </Link>
          </li>
          <li className="navbar-link">
            <Link to="/formazione" aria-label="Formazione">
              Formazione
            </Link>
          </li>
          <li className="navbar-link">
            <Link to="/progetti" aria-label="Progetti">
              Progetti
            </Link>
          </li>
          <li className="navbar-link">
            <Link to="/lavoro" aria-label="Lavoro">
              Lavoro
            </Link>
          </li>
          <li className="navbar-link">
            <Link to="/contatti" aria-label="Contatti">
              Contatti
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
