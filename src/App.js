import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

class App extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return <Home />;
  }
}

export default App;
