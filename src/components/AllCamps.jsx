import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { allCamps } from "../data/data";

const AllCamps = () => {
  const [titleColor, setTitleColor] = useState("text-black");
  const [activeId, setActiveId] = useState(0);

  const displayCamps = allCamps.map((item, index) => {
    return (
      <div>
        <div className="d-flex justify-content-center py-5">
          <Fade delay={item.titleDelay} bottom>
            <Link to={`/camp-details?id=${item.id}`}>
              <h5
                style={{ cursor: "pointer" }}
                className={
                  item.id === activeId ? `${titleColor} fw-bold` : "fw-bold"
                }
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
          <div className="mobile-view">
            <Fade left delay={400}>
              <img
                alt={item.name}
                src={item.image}
                className="img-fluid col-md-5 rounded"
              />
            </Fade>

            <Fade delay={item.detailDelay} bottom>
              <div className="col-md-6 pt-2">
                <div>{item.details}</div>
                <div className="mt-3 d-flex justify-content-center">
                  <Link
                    className="btn-info btn shadow"
                    to={`/camp-details?id=${item.id}`}
                  >
                    View Activities and Locations at {item.name}
                  </Link>
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
                <div className="col-md-6 pt-2 desktop-view">
                  <div>{item.details}</div>
                  <div className="mt-3 d-flex justify-content-center">
                    <Link
                      className="btn-info btn shadow"
                      to={`/camp-details?id=${item.id}`}
                    >
                      View Activities and Locations at {item.name}
                    </Link>
                  </div>
                </div>
              </Fade>
            </>
          ) : (
            <>
              <Fade delay={item.detailDelay} bottom>
                <div className="col-md-6 pt-2 desktop-view">
                  <div>{item.details}</div>
                  <div className="mt-3 d-flex justify-content-center">
                    <Link
                      className="btn-info btn shadow"
                      to={`/camp-details?id=${item.id}`}
                    >
                      View Activities and Locations at {item.name}
                    </Link>
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
    <section>
      <div>{displayCamps}</div>
    </section>
  );
};

export default AllCamps;
