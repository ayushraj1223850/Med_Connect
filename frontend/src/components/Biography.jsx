import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          
          <h3>Who We Are?</h3>
          <p>
             Seamless Booking: Easily schedule appointments with healthcare professionals in just a few clicks.  
             Personalized Care: Our network of skilled professionals is dedicated to providing tailored care to meet your specific needs.  
             Compassionate Expertise: Access reputable healthcare professionals who prioritize your well-being.  
             Optimal Health and Wellness: Embark on a journey towards optimal health and wellness with our dedicated team.  
          </p>
          
         
          <p>
          the convenience reliability of Med Connect for all your online doctor appointment needs. Your well-being is our priority.
          Schedule Your Appointment with Med Connect and take the first step towards a healthier, happier you.
          
          </p>
          <p>Remember, at Med Connect, your health is our commitment.!</p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
