import React, { useContext } from "react";
import { StateContext } from "../../redux";
import "./weekly-forecast.style.scss";

 const WeaklyForecast = () => {
    const {weeklyTempData} = useContext(StateContext);

     return (
        <div className="flex-wrapper">
            <div className="grid-wrapper">
                {weeklyTempData.map(({temperature, dayNamed}) => {
                    return (
                        <div key={dayNamed}>
                            <p>{dayNamed}</p>
                            <p>{Math.floor(temperature)} <span>&#176;C</span></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

 export default WeaklyForecast; 