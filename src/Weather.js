import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=743bee57fddbfaf52447193a87d5dd25`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter city" onChange={updateCity} />
      <input type="submit" value="search" />
    </form>
  );
  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li>Temperature: {weather.temperature}°C </li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/hr</li>
          <li>
            <img src={weather.icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
