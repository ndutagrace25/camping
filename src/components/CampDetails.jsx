import React from "react";
import { Navbar } from "../common";
import GoogleMapReact from "google-map-react";
import { allCamps } from "../data/data";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const CampDetails = (props) => {
  const cutrrentId = queryString.parse(useLocation().search);

  const currentCamp = allCamps.filter(
    (item) => item.id === parseInt(cutrrentId.id)
  )[0];

  const defaultProps = {
    center: {
      lat: currentCamp.lat,
      lng: currentCamp.lon,
    },
    zoom: 12,
  };

  const AnyReactComponent = ({ text }) => (
    <div
      onClick={() => alert("Hey there")}
      className="p-3 fw-bold"
      style={{ fontFamily: "Carviar Dreams", fontSize: "12px" }}
    >
      <i className="fa-solid fa-location-pin text-danger fa-2x"></i>
      <span className="text-primary">{text}</span>
    </div>
  );

  return (
    <div className="home container-fluid">
      <Navbar />
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBj5ktCVyiIpMmxZMBrUcJ-VnpC_3kKP90" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={currentCamp.lat}
            lng={currentCamp.lon}
            text={currentCamp.name}
          />
        </GoogleMapReact>
      </div>
      <div>{currentCamp.name}</div>
    </div>
  );
};

export default CampDetails;
