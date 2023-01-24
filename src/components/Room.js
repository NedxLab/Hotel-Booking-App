import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../images/details-1.jpeg";
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, price, images, description, type, extras } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">
        Name: {name} <br />
        Grade: {type} <br />
        Description: {extras}
      </p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
