import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Forecast from "./components/Forecast";

function App() {
  const apiKey = "6ef32f99e8030ac9fb373d1ed0ac652a";
  //state to hold the forecasts
  const [weather, setForecast] = useState({});
  //request the data
  const getForecast = async (zipCode) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`
    );
    const json = await response.json();
    setForecast(json);
  };

  useEffect(() => {
    //create an array of string for several zipcodes
    const zipCodes = [73106, 99501, 46923];
    // generate a random index of that array
    const randomIndex = Math.floor(Math.random() * zipCodes.length);
    //assign the item at that index to a variable
    const randomZip = zipCodes[randomIndex];
    //pass that variable to getForecast
    getForecast(randomZip);
  }, []);

  return (
    <div className="App">
      <Form getForecast={getForecast} />
      <Forecast weather={weather} />
    </div>
  );
}

export default App;
