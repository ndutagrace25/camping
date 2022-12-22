import React from "react";
import Bounce from "react-reveal/Bounce";

const Header = () => {
  return (
    <section className="header-bg d-flex justify-content-center align-items-center">
      <div className="text-white fw-bold ">
        <div
          style={{ fontFamily: "Carviar Dreams Bold" }}
          className="header-text"
        >
          <Bounce delay={300}>20 Best Adventurous Places in Kenya</Bounce>
        </div>
      </div>
    </section>
  );
};

export default Header;
