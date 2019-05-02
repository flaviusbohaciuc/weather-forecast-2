import React, { useContext } from "react";
import { StateContext } from "../../redux";
import "./windmill.style.scss";
import { FlapsStyled } from "./windmill.style";

const Windmill = () => {

  const {temperature, windSpeed} = useContext(StateContext)
  console.log(temperature, )

  return (
    <div className="wrapper">
      <div className="windmill">
        <div className="post" />
        <div className="engine" />
        <FlapsStyled windSpeed={windSpeed}>
          <div className="flap" />
          <div className="flap" />
          <div className="flap" />
        </FlapsStyled>
      </div>
    </div>
  );
};

export default Windmill;
