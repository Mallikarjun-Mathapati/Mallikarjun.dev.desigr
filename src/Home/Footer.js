import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-p">
            <p>Copyright © 2023. All rights are reserved</p>
          </div>
          <div className="footer-logos">
            <Link
              aria-label="linkedin "
              rel="noreferrer"
              target="_blank"
              to="https://www.linkedin.com/in/mallikarjun-mathapati-6277a0215"
            >
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </Link>
            <Link
              aria-label="github"
              rel="noreferrer"
              target="_blank"
              to="https://github.com/Mallu0007"
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </Link>
            <Link
              aria-label="Behance"
              rel="noreferrer"
              target="_blank"
              to="https://www.behance.net/mallu007"
            >
              <i className="fa-brands fa-behance fa-xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
