import React, { Component } from "react";
import "./OurMenu.css";
import OurMeunSlides from "../utils/OurMeunSlides/OurMeunSlides";
import _Button from "../utils/Button/_Button";

class OurMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: null
    };
  }

  render() {
    return (
      <div style={{ background: "#f3f3f3", position: "relative" }}>
        <div className="_our_menu_title">
          <h1>OUR MENU</h1>
          <_Button />
        </div>
        <div className="container">
          <div className="our_menu_container">
            <div
              className="our_menu_col"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="700"
            >
              <div className="our_menu_title">
                <h1>STARTERS</h1>
              </div>
              <OurMeunSlides />
              <OurMeunSlides
                title={"CHIFA CHICHARRONES"}
                description={
                  "Slow cooked, crispy pork belly with sweet soy sauce"
                }
                price={6.95}
              />
              <OurMeunSlides
                title={"CALAMARES"}
                description={
                  "Crispy baby squid with pickled jalapeño miso salsa"
                }
                price={6.95}
              />
            </div>
            <div className="vl" />

            {/* second */}
            <div
              className="our_menu_col"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="700"
              style={{ verticalAlign: "bottom" }}
            >
              <div>
                <div className="our_menu_title">
                  <h1 style={{ marginLeft: -7 }}>
                    MAIN <br />
                    COURSES
                  </h1>
                  <div className="text_hidder" />
                </div>
                <OurMeunSlides
                  title={"EL CLASICO"}
                  description={
                    "Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)"
                  }
                  price={8.95}
                />
                <OurMeunSlides
                  title={"TIRADITO CALLAO"}
                  description={
                    "Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies"
                  }
                  price={8.95}
                />
              </div>
            </div>
            <div className="vl" />
            {/* third */}
            <div
              className="our_menu_col"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="700"
            >
              <div>
                <div className="our_menu_title">
                  <h1 style={{ marginLeft: -6 }}>SIDES</h1>
                  <div className="text_hidder" />
                </div>
                <OurMeunSlides
                  title={"SUPER POLLO"}
                  description={
                    "Marinated corn fed chicken pieces with rocotto salsa"
                  }
                  price={4.95}
                />
                <OurMeunSlides
                  title={"PATATAS FRITAS"}
                  description={
                    "Sweet potato fries with aji rocotto mayonnaise (v)"
                  }
                  price={3.95}
                />
              </div>
            </div>
            <div className="vl" />
            {/* Fourth */}
            <div
              className="our_menu_col"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="700"
            >
              <div>
                <div className="our_menu_title">
                  <h1 style={{ marginLeft: -6 }}>DESSERTS</h1>
                  <div className="text_hidder" />
                </div>
                <OurMeunSlides
                  title={"ICECREAM"}
                  description={"Lorem ipsum dolor sit amet salerma petrum sea"}
                  price={3.95}
                />
                <OurMeunSlides
                  title={"TIRAMISU"}
                  description={"Lorem ipsum dolor sit amet salerma petrum sea"}
                  price={3.95}
                />
                <OurMeunSlides
                  title={"CHOCOLATE BROWNIE"}
                  description={"Lorem ipsum dolor sit amet salerma petrum sea"}
                  price={3.95}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OurMenu;
