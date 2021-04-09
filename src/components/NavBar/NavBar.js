import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img className="nav_logo" src="/tmdb.new.logo.svg.png" alt="" />
        <img className="nav_avatar" src="/avatar-tmdb.png" alt="" />
      </div>
    </div>
  );
};

export default NavBar;
