import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            we are committed to making healthcare more accessible and convenient for everyone. Our platform connects you with experienced doctors, allowing you to book appointments quickly and easily. We believe in empowering patients with the tools to take charge of their health. With a focus on quality care and user-friendly service, we strive to make your healthcare journey seamless and stress-free.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
