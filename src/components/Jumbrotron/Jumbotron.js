import React from "react";
import "./Jumbroton.css";

const Jumbotron = props => {
  return (
    <div id="hero">
      <div style={{ postion: "relative" }}>
        <img src="/images/bg-pic.png" className="middle_image" />
        <img src="/images/stamp.png" className="stamp" />
        <div className="text_section">
          <h1 className="line_1">THE BEST FOODIE</h1>
          <h1 className="line_2">EXPERIENCE</h1>
          <h4>NOW IN LONDON</h4>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
