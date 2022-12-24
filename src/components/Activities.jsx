import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { Navbar } from "../common";
import { activitiesData } from "../data/activityData";

const Activities = () => {
  const [titleColor, setTitleColor] = useState("text-black");
  const [activeId, setActiveId] = useState(0);
  const displayCamps = activitiesData.map((item, index) => {
    return (
      <div className="" style={{ fontFamily: "Carviar Dreams" }}>
        <div className="d-flex justify-content-center py-5">
          <Fade delay={item.titleDelay} bottom>
            <Link to={`/camp-details?id=${item.place_id}`}>
              <h5
                style={{ fontFamily: "Carviar Dreams Bold", cursor: "pointer" }}
                className={item.id === activeId ? titleColor : ""}
                onMouseEnter={() => {
                  setTitleColor("text-info");
                  setActiveId(item.id);
                }}
                onMouseLeave={() => setTitleColor("text-black")}
              >
                <span>{item.id}. </span>
                {item.name}
              </h5>
            </Link>
          </Fade>
        </div>
        <div className="d-flex justify-content-between camp-card">
          <div className="mobile-view px-2">
            <Fade left delay={400}>
              <img
                alt={item.name}
                src={item.image}
                className="img-fluid col-md-5 rounded"
              />
            </Fade>

            <Fade delay={item.detailDelay} bottom>
              <div className="col-md-6 pt-2">
                <div className="d-flex justify-content-center py-3 fw-bold">
                  Places to Visit for {item.name}
                </div>
                <div className="d-flex justify-content-center">
                  <div>
                    {item.places.map((place, index) => {
                      return (
                        <div
                          key={index}
                          style={{ cursor: "pointer" }}
                          className="p-2"
                        >
                          <span>
                            <i className="fa-solid fa-gem me-2 text-info"></i>
                          </span>
                          {place.name}
                          <Link
                            to={`/camp-details?id=${place.place_id}`}
                            className="fas fa-external-link-alt text-primary fa-lg ms-2"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          {parseInt(item.id) & 1 ? (
            <>
              <Fade left delay={400}>
                <img
                  alt={item.name}
                  src={item.image}
                  className="img-fluid col-md-5 rounded desktop-view"
                />
              </Fade>

              <Fade delay={item.detailDelay} bottom>
                <div className="col-md-6 desktop-view d-flex justify-content-center">
                  <div className="shadow bg-gray p-3 rounded col-md-6">
                    <div className="fw-bold d-flex justify-content-center py-3">
                      Places to Visit for {item.name}
                    </div>
                    <div className="d-flex justify-content-center">
                      <div>
                        {item.places.map((place, index) => {
                          return (
                            <div
                              key={index}
                              style={{ cursor: "pointer" }}
                              className="p-2"
                            >
                              <span>
                                <i className="fa-solid fa-gem me-2 text-info"></i>
                              </span>
                              {place.name}
                              <Link
                                to={`/camp-details?id=${place.place_id}`}
                                className="fas fa-external-link-alt text-primary fa-lg ms-2"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </>
          ) : (
            <>
              <Fade delay={item.detailDelay} bottom>
                <div className="col-md-6 pt-2 desktop-view d-flex justify-content-center">
                  <div className="shadow bg-gray p-3 rounded col-md-6">
                    <div className="d-flex justify-content-center py-3 fw-bold">
                      Places to Visit for {item.name}
                    </div>
                    <div className="d-flex justify-content-center">
                      <div>
                        {item.places.map((place, index) => {
                          return (
                            <div
                              key={index}
                              style={{ cursor: "pointer" }}
                              className="p-2"
                            >
                              <span>
                                <i className="fa-solid fa-gem me-2 text-info"></i>
                              </span>
                              {place.name}
                              <Link
                                to={`/camp-details?id=${place.place_id}`}
                                className="fas fa-external-link-alt text-primary fa-lg ms-2"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade left delay={400}>
                <img
                  alt={item.name}
                  src={item.image}
                  className="img-fluid col-md-5 rounded desktop-view"
                />
              </Fade>
            </>
          )}
        </div>
      </div>
    );
  });
  return (
    <div className="container-fluid home">
      <Navbar />
      <div className="bg-white px-3 shadow pb-5">{displayCamps}</div>
    </div>
  );
};

export default Activities;
