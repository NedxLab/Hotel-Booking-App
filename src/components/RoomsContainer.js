import React from "react";
import RoomLists from "./RoomLists";
import RoomsFilter from "./RoomsFilter";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

const RoomsContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomLists rooms={sortedRooms} />
    </>
  );
};
export default withRoomConsumer(RoomsContainer);
// import React from "react";
// import RoomLists from "./RoomLists";
// import RoomsFilter from "./RoomsFilter";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";

// const RoomsContainer = () => {
//   return (
//     <>
//       <RoomConsumer>
//         {(value) => {
//           const { loading, sortedRooms, rooms } = value;
//           if (loading) {
//             return <Loading />;
//           }
//           return (
//             <div>
//               RoomsContainer
//               <RoomLists rooms={sortedRooms} />
//               <RoomsFilter rooms={rooms} />
//             </div>
//           );
//         }}
//       </RoomConsumer>
//     </>
//   );
// };

// export default RoomsContainer;
