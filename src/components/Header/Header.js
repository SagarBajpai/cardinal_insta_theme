import React from "react";
import "./Header.css";
const Header = props => {
  const { logo, leftSideItem, rightSideItem } = props;
  let leftSide, rightSide;
  if (leftSideItem) {
    leftSide = leftSideItem.map(item => {
      return (
        <li>
          <a className="list_items" href="#">
            {item}
          </a>
        </li>
      );
    });
  }
  if (rightSideItem) {
    rightSide = rightSideItem.map(item => {
      return (
        <li>
          <a className="list_items" href="#">
            {item}
          </a>
        </li>
      );
    });
  }
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div
          className="container-fluid"
          style={{ position: "fixed", width: "100%" }}
        >
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand">
              {logo ? (
                <img src={logo} className="logo" />
              ) : (
                <span className="list_item_logo">LOGO</span>
              )}
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">{leftSide}</ul>
            <ul className="nav navbar-nav navbar-right">{rightSide}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
