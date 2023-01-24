import React from "react";
import banner from "../images/banner.jpg";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <>
      <div className="herobanner" style={{ background: "white" }}>
        <div className="itemsbanner">
          <div className="bannercontent">
            <div className="bannertext">
              <h1>IN AN ELEGANT OLD BUILDING</h1>
              <h3>CENTRAL ROME, HOTEL CANADA IS THE RESULT OF</h3>
              <h5>GENERATIONS OF HOTELIERS.</h5>
              <a type="submit" href="/rooms" className="bannerbutton">
                See Our Rooms
              </a>
            </div>
          </div>
          <div className="bannerimage">
            <img src={banner} alt="hotel banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
