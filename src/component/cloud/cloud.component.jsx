import React, { useContext } from "react";
import { StateContext } from "../../redux";
import "./cloud.style.scss";
import { CloudStyled } from './cloud.style'

const Cloud = () => {
  const {windSpeed} = useContext(StateContext)
  return (
    <div className="wrapper">
      <div className="clouds">
        <CloudStyled windSpeed123={windSpeed} scale={0.65}>
          <div className="cloud" />
        </CloudStyled>
        <CloudStyled windSpeed123={windSpeed} scale={0.3}>
          <div className="cloud" />
        </CloudStyled>
        <CloudStyled windSpeed123={windSpeed} scale={0.5}>
          <div className="cloud" />
        </CloudStyled>
        <CloudStyled windSpeed123={windSpeed} scale={0.4}>
          <div className="cloud" />
        </CloudStyled>
        <CloudStyled windSpeed123={windSpeed} scale={0.55}>
          <div className="cloud" />
        </CloudStyled>
      </div>
    </div>
  );
};

export default Cloud;
