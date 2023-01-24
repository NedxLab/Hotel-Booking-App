import React, { Component } from "react";
import items from "./data";
import Contentful from "./Contentful";

const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  // getData
  getData = async () => {
    try {
      let response = await Contentful.getEntries();
      let allItems = [...items, ...response.items];
      let rooms = this.formatData(allItems);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((room) => room.price));
      let maxSize = Math.max(...rooms.map((room) => room.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (err) {
      console.log(err);
    }
    console.log(items);
  };
  componentDidMount() {
    this.getData();
  }
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  handleChange = (e) => {
    const target = e.target;

    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(target.type);
    const name = target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
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
    } = this.state;
    // all the rooms
    let temprooms = [...rooms];
    // types of rooms and transform values
    capacity = parseInt(capacity);
    price = parseInt(price);
    if (type !== "all") {
      temprooms = temprooms.filter((room) => room.type === type);
    }
    // filter capacity values
    if (capacity !== 1) {
      temprooms = temprooms.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    temprooms = temprooms.filter((room) => room.price <= price);

    // filter by size
    temprooms = temprooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    // filter by breakfast
    if (breakfast) {
      temprooms = temprooms.filter((room) => room.breakfast === true);
    }
    // filter by pets
    if (pets) {
      temprooms = temprooms.filter((room) => room.pets === true);
    }
    this.setState({
      sortedRooms: temprooms,
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export { RoomConsumer, RoomContext, RoomProvider };
