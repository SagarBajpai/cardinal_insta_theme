import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./Location.css";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  mapClicked = e => {
    console.log(e);
    var lat = e.initialCenter.lat;
    var lng = e.initialCenter.lng;
    console.log("lat :", lat);
    console.log("lng :", lng);
  };
  render() {
    const mapStyles = [
      {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [{ lightness: "-100" }, { color: "#ffdac9" }]
      },
      {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#ffcab1" }]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffcab1" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ lightness: 100 }, { visibility: "simplified" }]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ visibility: "on" }, { lightness: 700 }]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#92e1dd" }]
      }
    ];
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <Map
          google={this.props.google}
          zoom={8}
          styles={mapStyles}
          initialCenter={{ lat: 51.512625, lng: -0.12692 }}
          onClick={this.mapClicked}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAjJCuA7GN9jiT7Xlc1-VvRdgm8g7q_SrI"
})(Location);
