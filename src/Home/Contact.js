import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Link className="a-contact" id="contact"></Link>
      <div className="contact">
        <div className="contact-center">
          <div className="contact-heading">
            <h4>CONTACT ME 🤙</h4>
            <h2>Don't be shy! Hit me up! 👇</h2>
          </div>
          <div className="contact-contact">
            <div className="contact-contact-number">
              <img src={require("../Images/Logos/Phone logo.png")} alt="" />
              <p>+91 8095183988</p>
            </div>
            <div className="contact-contact-email">
              <img src={require("../Images/Logos/Emai logo.png")} alt="" />
              <p>Mallikarjun000007@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
