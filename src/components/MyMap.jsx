import React from "react";
import { Navbar } from "../common";

const MyMap = () => {
  return (
    <>
      <Navbar />
      <div className="container px-2 d-flex justify-content-center align-items-center py-3 flex-column shadow my-3">
        <h3>My Map</h3>
        <div>
          Find a place to explore from the map below. Trust me, these are
          awesome places to visit.
        </div>
      </div>
      <div className="px-2 d-flex justify-content-center">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1RmI7LHoGz81exc_Pl42pTdhjbb7T_qU&ehbc=2E312F"
          title="Adventures in Kenya"
          className="iframe-size"
        ></iframe>
      </div>
    </>
  );
};

export default MyMap;
