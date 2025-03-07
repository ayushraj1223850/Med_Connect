import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          At Med Connect, we understand the importance of accessible healthcare, and we are dedicated to providing a seamless experience for booking online doctor appointments. Our platform connects you with a network of reputable healthcare professionals who are committed to delivering personalized care tailored to your unique needs. With a focus on compassion and expertise, our skilled professionals prioritize your well-being, ensuring a harmonious journey towards optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
