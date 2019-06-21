import React from "react";
import "./RecipeCards.css";

const RecipeCards = props => {
  const {
    image,
    width,
    catagory,
    dishname,
    discription,
    servings,
    servings_digit_size,
    servings_text_size
  } = props;
  return (
    <div>
      <div>
        <div className="outer_box" style={{ width: width }}>
          <div style={{ position: "relative" }}>
            <img src="/images/go-btn.png" className="_arrow" />
            <img src={image} style={{ width: width }} />
            <div className="_servings">
              <div>
                <h1 style={{ fontSize: servings_digit_size }}>{servings}</h1>
                <h3 style={{ fontSize: servings_text_size }}>SERVINGS</h3>
              </div>
            </div>
          </div>
          <div className="content_box">
            <div className="_catagory">
              <p>{catagory}</p>
            </div>
            <div className="_dishname">
              <h5>{dishname}</h5>
            </div>
            <div className="_descption">
              <p>{discription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeCards.defaultProps = {
  image: "/images/menu_3.jpg",
  width: 340,
  catagory: "DIFFICULTY",
  dishname: "CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST",
  discription:
    "Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…",
  servings: 4,
  servings_digit_size: 25,
  servings_text_size: 16
};
export default RecipeCards;
