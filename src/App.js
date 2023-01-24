import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

function App() {
  var location = useLocation();
  var slug = location.pathname.slice(7, location.pathname.length);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom slug={slug} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
