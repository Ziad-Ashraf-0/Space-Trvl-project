import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>123 Acne St.</p>
              <h4>Houston, Tx</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              1-555-999-6666
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              trips@galaxy.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
            hendrerit enim, vitae suscipit mauris. Fusce blandit odio id libero
            ornare sagittis. Donec blandit turpis et ipsum pretium, ut finibus
            eros scelerisque. Donec non nisl non ligula pretium venenatis. Morbi
            fermentum enim vitae turpis porttitor, euismod laoreet mauris
            mollis.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
