import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";
// Get unique values
const uniqueValues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    size,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  let types = uniqueValues(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });
  let people = uniqueValues(rooms, "capacity");
  people = people.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });
  return (
    <>
      <section className="filter-container">
        <Title title="Search Rooms" />
        <form className="filter-form">
          {/* get type */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          {/* get guests */}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          {/* get Price */}
          <div className="form-group">
            <label htmlFor="price">Price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
            {/* get Size */}
            <div className="form-group">
              <label htmlFor="size">Room size</label>
              <div className="size-inputs">
                <input
                  type="number"
                  name="minSize"
                  id="size"
                  value={minSize}
                  onChange={handleChange}
                  className="size-input"
                />
                <input
                  type="number"
                  name="maxSize"
                  id="size"
                  value={maxSize}
                  onChange={handleChange}
                  className="size-input"
                />
              </div>
            </div>
          </div>
          {/* get extras */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default RoomsFilter;
