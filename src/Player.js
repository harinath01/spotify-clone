import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";

function Player({ spotify}) {
  return (
    <div className='player'>
      <div className='player_body'>
        <Sidebar />
        <Body />
      </div>
      <Footer spotify={spotify}/>
    </div>
  );
}
export default Player;
