import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const onClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <i class="fab fa-affiliatetheme" />
            COMPANY-NAME
          </Link>
          <div className="menu-icon" onClick={onClick}>
            <i class={click ? "fas fa-redo" : "fas fa-align-justify"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className="nav-links" onClick={closeMenu}>
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}
