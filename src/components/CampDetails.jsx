import React from "react";
import { Navbar } from "../common";
import GoogleMapReact from "google-map-react";

const CampDetails = () => {
  const defaultProps = {
    center: {
      lat: 0.04622,
      lng: 36.932859,
    },
    zoom: 11,
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div className="home container-fluid">
      <Navbar />
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBj5ktCVyiIpMmxZMBrUcJ-VnpC_3kKP90" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={0.04622} lng={36.932859} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default CampDetails;
