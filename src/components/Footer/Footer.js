import React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="foot-container">
      <section className="foot-sub">
        <p className="foot-sub-heading">
          Join Newsletter to stay up to date on deals and offers
        </p>
        <div className="input">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="foot-input"
            />
            <Button buttonStyle="btn-outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="foot-links">
        <div className="foot-link-wraper">
          <div className="foot-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Customers</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="foot-link-wraper">
          <div className="foot-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">Community</Link>
            <Link to="/">Locations</Link>
            <Link to="/">Contacts</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="foot-link-wraper">
          <div className="foot-link-items">
            <h2>Social Media</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Instagram</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="foot-logo">
            <Link className="social-logo">
              <i className="fab fa-affiliatetheme" />
              COMPANY-NAME
            </Link>
          </div>
          <small className="legal">COMPANY-NAME © 2021</small>
          <div className="social-media-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
