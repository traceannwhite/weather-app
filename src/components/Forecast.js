import React from "react";

const Forecast = ({ weather }) => {
  const loaded = () => {
    let lowTemp = Math.floor(weather.main?.temp_min);
    let highTemp = Math.floor(weather.main?.temp_max);
    let currentTemp = Math.floor(weather.main?.temp);
    if (currentTemp > 90) {
      currentTemp = <h1 style={{ color: "red" }}>{currentTemp}</h1>;
    } else if (currentTemp < 40) {
      currentTemp = <h1 style={{ color: "lightblue" }}>{currentTemp}</h1>;
    } else {
      currentTemp = <h1>{currentTemp}</h1>;
    }
    return (
      <div>
        <h4>{weather?.name}</h4>
        <h1>{currentTemp}</h1>
        <h2>It is {weather.weather[0].description}.</h2>
        <h5>Min. {lowTemp}</h5>
        <h5>Max. {highTemp}</h5>
      </div>
    );
  };
  const loading = () => {
    return <h1>Zipcode Invalid</h1>;
  };
  return weather.weather ? loaded() : loading();
};

export default Forecast;

