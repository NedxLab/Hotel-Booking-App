import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLocationArrow,
} from "react-icons/fa";
import defaultImg from "../images/logobox.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footercontent">
          <div className="footertext">
            <div className="footertitle">
              <a href="/">info@nedxHotels.com</a>
            </div>
            <div className="footerinfo">
              <div className="footerwriteup">
                <h1>Nedx Hotel</h1>
                <p>Via Vicenza 58 - 00185 - Roma (RM) - Italia</p>
                <p>Phone: +39 06 4457770</p>
                <a href="/">info@nedxHotels.com</a>
              </div>
              <div className="footerlinks">
                <a href="/">Privacy policy -</a>
                <a href="/"> Sitemap -</a>
                <a href="/"> Disclaimer</a>
                <p>Powered and Designed by Nedx</p>
              </div>
              <div className="footerbase">
                <h5>
                  Customer care: <span>+01-656-889</span>{" "}
                </h5>
                <p>A Nedx Holding Ltd. Property.</p>
                <p>Into the Badlands.</p>
              </div>
            </div>
          </div>
          <div className="footerprops">
            <div className="footericons">
              <FaFacebook />
              <FaGooglePlus />
              <FaInstagram />
              <FaLocationArrow />
            </div>
            <img src={defaultImg} alt="" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p style={{ textAlign: "center" }}>
          Copyright &#169; {new Date().getFullYear()}. NedxHotels
        </p>
      </div>
    </>
  );
};

export default Footer;
