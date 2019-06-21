import React from "react";
import "./OurMeunSlides.css";

const OurMeunSlides = props => {
  const { title, description, price } = props;
  return (
    <div>
      <div className="our_menu_slides_text">
        <h5>{title}</h5>
        <p>{description}</p>
        <div>
          <div className="our_menu_slides_price">
            <p>
              <span>&#xa3;</span>
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
OurMeunSlides.defaultProps = {
  title: "QUINOA CROQUETTAS",
  description:
    "Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)",
  price: 4.95
};
export default OurMeunSlides;
