import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-bottom">
          Made by INNOVATION SQUAD@NACOS-HACKATHON{new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
