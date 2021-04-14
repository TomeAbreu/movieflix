import React from "react";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav Bar */}
      <NavBar />

      {/* Banner Bar */}
      <Banner />

      {/* Rows */}
    </div>
  );
};

export default HomeScreen;
