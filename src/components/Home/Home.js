import React, { Component } from "react";
import Header from "../Header/Header";
import Jumbotron from "../Jumbrotron/Jumbotron";
import Location from "../Location/Location";
import Recipes from "../Recipes/Recipes";
import OurCommunity from "../OurCommunity/OurCommunity";
import CollaborateWithUs from "../CollaborateWithUs/CollaborateWithUs";
import Footer from "../Footer/Footer";
import OurMenu from "../OurMenu/OurMenu";
import "./Home.css";
import ScrollspyNav from "react-scrollspy-nav";
class Home extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {};
    }
  }
  render() {
    return (
      <div id="main">
        <div>
          <div className="_request_info">
            <h4>REQUEST INFO</h4>
          </div>
        </div>
        <div className="section_counter">
          <ScrollspyNav
            scrollTargetIds={[
              "section1",
              "section2",
              "section3",
              "section4",
              "section5",
              "section6"
            ]}
            activeNavClass="is_active"
          >
            <div className="section_counter_li">
              <span className="_dash">-</span>
              <a href="#section1" className="section_counter_a">
                <span>01</span>
              </a>
            </div>
            <div className="section_counter_li">
              <span className="_dash">-</span>
              <a href="#section2" className="section_counter_a">
                <span>02</span>
              </a>
            </div>
            <div className="section_counter_li">
              <span className="_dash">-</span>
              <a href="#section3" className="section_counter_a">
                <span>03</span>
              </a>
            </div>
            <div className="section_counter_li">
              <span className="_dash">-</span>
              <a href="#section4" className="section_counter_a">
                <span>04</span>
              </a>
            </div>
            <div className="section_counter_li">
              <span className="_dash">-</span>
              <a href="#section5" className="section_counter_a">
                <span>05</span>
              </a>
            </div>
            <div className="section_counter_li">
              <span className="_dash">-</span>
              <a href="#section6" className="section_counter_a">
                <span>06</span>
              </a>
            </div>
          </ScrollspyNav>
        </div>
        <Header
          leftSideItem={[
            "ABOUT",
            "COMMUNITY",
            "LOCATION",
            "OUR MENU",
            "RECIPES"
          ]}
          rightSideItem={["CONTACT", "LOGIN"]}
        />
        <div id="section1">
          <Jumbotron />
        </div>
        <div id="section2">
          <OurCommunity />
        </div>

        <div id="section3">
          <Location />
        </div>

        <div id="section4">
          <OurMenu />
        </div>

        <div id="section5">
          <Recipes />
        </div>

        <div id="section6">
          <CollaborateWithUs />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
