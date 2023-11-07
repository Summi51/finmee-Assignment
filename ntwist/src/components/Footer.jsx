import React from "react";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "rgb(8, 21, 40)",
    padding: "50px",
    position: "relative",
  };

  const footerContentStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "28px",
    cursor: "pointer",
  };

  const addressStyle = {
    color: "#6f7f92",
    fontSize: "17px",
    paddingTop: "20px",
    textAlign: "center",
  };

  const socialIconsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "20px",
    fontSize: "30px",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={footerStyle}>
      <img
        width={"11%"}
        src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
        alt="img"
      />
      <div style={footerContentStyle}>
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Contact Us</h3>
        <h3>Privacy Policy</h3>
        <h3>Sitemap</h3>
      </div>
      <div style={addressStyle}>
        9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
      </div>
      <div style={socialIconsStyle}>
        <div>
          <FaTwitterSquare />
        </div>
        <div>
          <FaLinkedin />
        </div>
      </div>
      <div>© 2022. Ntwist Inc.</div>
    </div>
  );
};

export default Footer;
