import React, { useState } from "react";
import "./App.css";
import "./Weather.css";
import axios from "axios";
import Footer from "./Footer";
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
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
  // if (loaded) {
  return (
    <div className="container">
      <div className="Weather">
        {form}
        <h1> Enugu </h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>{weather.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt="weather icon" />

            <span className="temperature">{weather.temperature}</span>
            <span className="unit">°F|°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  //} else {
  //   return form;
  // }
}
