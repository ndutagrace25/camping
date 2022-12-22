import React from "react";
import { Navbar } from "../common";
import { Header, Intro, AllCamps } from ".";

const Home = () => {
  return (
    <div className="container home">
      <Navbar />
      <Header />
      <div
        className="shadow p-3 text-black bg-white intro fw-normal intro-text "
        style={{ fontFamily: "Carviar Dreams" }}
      >
        <Intro />
        <AllCamps />
      </div>
    </div>
  );
};

export default Home;
