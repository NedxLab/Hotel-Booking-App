import React, { Component } from "react";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
import Title from "./Title";
import drive from "../images/drive.jpeg";
import beer from "../images/beer.jpg";
import cocktails from "../images/cocktails.jpg";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Our best ever mocktail recipes for every occasion, including non-alcoholic punch, mulled drinks, juices, spritzers, cordials and coolers.",
        src: cocktails,
      },

      {
        icon: <FaBeer />,
        title: "Free Beers",
        info: "Our personal pick for the best nonalcoholic beer is the Brooklyn Brewery Special Effects Hoppy Amber, which retains its rich flavor without the alcohol",
        src: beer,
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Transport ",
        info: "Soon, depending on where you live, all those bus, train, and tram journeys could be totally free.",
        src: drive,
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <div className="service" key={index}>
                <img src={item.src} alt={item.src} />

                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
