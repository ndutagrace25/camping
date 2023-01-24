import React from "react";
import { Navbar } from "../common";
import { Header, Intro, AllCamps } from ".";

const Home = () => {
  return (
    <div className="container-fluid home">
      <Navbar />
      <Header />
      <div className="shadow p-3 bg-white intro intro-text">
        <Intro />
        <AllCamps />
      </div>
    </div>
  );
};

export default Home;
