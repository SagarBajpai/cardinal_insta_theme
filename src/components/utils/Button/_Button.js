import React from "react";
import "./_Button.css";

const _Button = props => {
  const { name } = props;
  return (
    <div>
      <button className="btn _button">{name}</button>
    </div>
  );
};
_Button.defaultProps = {
  name: "KNOW MORE",
  color: "#FFDAC8"
};
export default _Button;
