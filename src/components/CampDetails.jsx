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
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBDgj6Va4JpcLr3I8cnL-Gqwd6qOSU7iSM" }}
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
      <div
        className=" col-md-12 d-flex justify-content-center"
        style={{ fontFamily: "Carviar Dreams" }}
      >
        <div className="p-2 d-flex justify-content-center align-items-center rounded bg-white col-md-3 shadow">
          Get directions to {currentCamp.name}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${currentCamp.lat},${currentCamp.lon}`}
            target="_blank"
            className="fas fa-external-link-alt text-primary fa-lg ms-2"
            style={{ cursor: "pointer" }}
            rel="noreferrer"
          >
            {""}
          </a>
        </div>
      </div>

      <div className="bg-white shadow my-3">
        
      </div>
    </div>
  );
};

export default CampDetails;
