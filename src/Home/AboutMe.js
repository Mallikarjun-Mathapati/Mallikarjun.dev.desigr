import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <Link className="a-Aboutme" id="aboutme"></Link>
      <div className=" container-aboutme" data-aos="fade-up">
        <div className="aboutme">
          <div className="aboutme-section-1">
            <h4>ABOUT ME 🙋</h4>
            <hr />
            <h2>
              A dedicated Front-end Developer and UX designer based in Karnataka
              Bengaluru 📍
            </h2>
            <p>
              As a Front End React Developer and UX Designer, I possess the
              technical skills required to create exceptional user experiences.
              My expertise in developing software applications using ReactJS
              allows me to build dynamic web pages with reusable components,
              increasing performance and scalability while reducing page load
              times. I also leverage my knowledge of UX design principles and
              best practices to develop intuitive interfaces that deliver
              seamless end-to-end experiences, from the moment users land on a
              website or application until they complete their desired task.
              With my ability to architect beautiful interfaces that prioritize
              usability, accessibility, and responsiveness across various screen
              sizes and devices, I am confident in my ability to deliver
              high-quality solutions that help businesses achieve their
              objectives and exceed user expectations.
            </p>
          </div>
          <div className="aboutme-section-2">
            <img src={require("../Images/About Me.jpg")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
