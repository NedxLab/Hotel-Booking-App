import React from "react";
import HeroBanner from "./HeroBanner";
import { useLocation } from "react-router-dom";

export default function Banner({ children, title, subtitle }) {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <HeroBanner />
      ) : (
        <div className="banner">
          <h1>{title}</h1>
          <div />
          <p>{subtitle}</p>
          {children}
        </div>
      )}
    </>
  );
}
