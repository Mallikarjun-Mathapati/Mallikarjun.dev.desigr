import React from "react";
import { Link } from "react-router-dom";

function IamSection() {
  return (
    <>
      <Link className="a-iamsection" id="iamsection"></Link>
      <section id="home" className="hero" data-aos="fade-up">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-img"></div>
              <div className="hero-text">
                <h1>I am Front End React Developer And UX Designer 👋 </h1>
                <p>
                  Hi, I'm Mallikarjun Mathapati A passionate Front-end Developer
                  and UX Designer based in Karnataka Bengaluru. 📍
                </p>
                <span>
                  <Link
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    to="https://www.linkedin.com/in/mallikarjun-mathapati-6277a0215"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    to="https://github.com/Mallikarjun-Mathapati"
                  >
                    <i className="fa-brands fa-github"></i>
                  </Link>
                  <Link
                    aria-label="Behance"
                    rel="noreferrer"
                    target="_blank"
                    to="https://www.behance.net/mallu007"
                  >
                    <i className="fa-brands fa-behance"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tech">
          <div className="sub-tech">
            <div className="tech-p">
              <p>Tech Stack</p>
            </div>
            <div className="tech-img">
              <div className="tech-img-main">
                <div className="tech img1">
                  <img src={require("../Images/Logos/HTML.png")} alt="" />
                  <img src={require("../Images/Logos/CSS.png")} alt="" />
                  <img src={require("../Images/Logos/JS.png")} alt="" />
                  <img src={require("../Images/Logos/ReactJS.png")} alt="" />
                </div>
                <div className="tech img2">
                  <img src={require("../Images/Logos/adobe illu.png")} alt="" />
                  <img src={require("../Images/Logos/wordPress.png")} alt="" />
                  <img src={require("../Images/Logos/Figama.png")} alt="" />
                  <img src={require("../Images/Logos/adobe XD.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IamSection;
