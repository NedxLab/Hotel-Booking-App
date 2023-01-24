import React from "react";
import Room from "./Room";

const RoomLists = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately, No Rooms Found</h3>
      </div>
    );
  }
  return (
    <>
      <section className="roomslist">
        <div className="roomslist-center">
          {rooms.map((item, index) => {
            return <Room key={item.id} room={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default RoomLists;
