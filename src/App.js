import React from "react";
import { Home, CampDetails, Activities, MyMap } from "./components";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camp-details" exact element={<CampDetails />} />
        <Route path="/activities" exact element={<Activities />} />
        <Route path="/my-map" exact element={<MyMap />} />
      </Routes>
    </Router>
  );
};

export default App;
