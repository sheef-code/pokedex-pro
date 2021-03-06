import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="container" style={{ color: "white" }}>
        <footer className="footer">
          <Link to={"/"}>
            <div className="navbar-brand mr-0 align-items-center">
              <span className="logo-first mr-1">POKEDEX</span>
              <span className="logo-second">PRO</span>
            </div>
          </Link>
          <span class="text">Created by sheef using pokeapi.co</span>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
