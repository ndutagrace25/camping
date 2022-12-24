import React from "react";
import { Navbar } from "../common";
import GoogleMapReact from "google-map-react";
import { allCamps } from "../data/data";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";

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

  const activities = currentCamp.activites.map((item, index) => {
    return (
      <div key={index} className="py-3 d-flex flex-row">
        <Fade bottom delay={400}>
          <span>
            <i className="fa-solid fa-gem me-2 text-info"></i>
          </span>
          {item.name}
        </Fade>
      </div>
    );
  });

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
        className="bg-white shadow p-3 rounded"
        style={{ fontFamily: "Carviar Dreams" }}
      >
        <div
          className=" col-md-12 d-flex justify-content-center"
          style={{ fontFamily: "Carviar Dreams" }}
        >
          <div className="pb-3 d-flex justify-content-center align-items-center  col-md-3 ">
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
        <div className="d-flex justify-content-center">
          <h5 style={{ fontFamily: "Carviar Dreams Bold" }}>
            {currentCamp.name}
          </h5>
        </div>
        <div className="d-flex flex-column pt-3 col-md-12 activity-mobile justify-content-center align-items-center">
          <div className="col-md-12 desktop-view">
            <div className="d-flex justify-content-center flex-wrap">
              <div className="activity-image">
                <Fade left delay={500}>
                  <img
                    alt="imagecamp"
                    src={currentCamp.image_one}
                    className="img-fluid  rounded "
                  />
                </Fade>
              </div>
              <div className="activity-image">
                <Fade left delay={300}>
                  <img
                    alt="imagecamp"
                    src={currentCamp.image_two}
                    className="img-fluid rounded"
                  />
                </Fade>
              </div>
              <div className="activity-image">
                <Fade left delay={500}>
                  <img
                    alt="imagecamp"
                    src={currentCamp.image_three}
                    className="img-fluid rounded"
                  />
                </Fade>
              </div>
              <div className="activity-image>
                <Fade left delay={500}>
                  <img
                    alt="imagecamp"
                    src={currentCamp.image_four}
                    className="img-fluid rounded"
                  />
                </Fade>
              </div>
            </div>
          </div>
          <div className="mobile-view px-3 rounded">
            <Fade left delay={400}>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                data-interval="5000"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={currentCamp.image_one}
                      className="d-block w-100"
                      alt={currentCamp.image_one}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={currentCamp.image_two}
                      className="d-block w-100"
                      alt={currentCamp.image_two}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={currentCamp.image_three}
                      className="d-block w-100"
                      alt={currentCamp.image_three}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={currentCamp.image_three}
                      className="d-block w-100"
                      alt={currentCamp.image_three}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </Fade>
          </div>
          <div className="col-md-6 mt-3">
            <div className="d-flex justify-content-center py-3 fw-bold">
              Activities At {currentCamp.name}
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <div>{activities}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
