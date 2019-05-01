import React, { useContext } from "react";
import { StateContext } from "../../redux";
import "./windmill.style.scss";

const Windmill = () => {

  const {temperature, windSpeed} = useContext(StateContext)
  console.log(temperature, windSpeed)

  return (
    <div className="wrapper">
      <div className="windmill">
        <div className="post" />
        <div className="engine" />
        <div className="flaps">
          <div className="flap" />
          <div className="flap" />
          <div className="flap" />
        </div>
      </div>
    </div>
  );
};

export default Windmill;
