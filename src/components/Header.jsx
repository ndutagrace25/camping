import React from "react";
import Bounce from "react-reveal/Bounce";

const Header = () => {
  return (
    <section className="header-bg d-flex justify-content-end pe-5 pt-5">
      <div className="text-white fw-bold ">
        <div className="header-text">
          <Bounce delay={300}>
            <span className="">20 Best Adventurous Places in Kenya</span>
          </Bounce>
        </div>
      </div>
    </section>
  );
};

export default Header;
