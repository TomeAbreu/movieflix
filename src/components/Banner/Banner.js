import "./Banner.css";

import React from "react";

const Banner = () => {
  var truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("/tmdb-banner.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `This is a test description This is a test description This is a test description This is a test description This is a test description This is a test descriptio This is a test descriptio This is a test descriptio This is a test descriptio This is a test descriptio This is a test descriptio This is a test descriptio This is a test descriptio`,
            150
          )}
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
