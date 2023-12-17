import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherDailyForcast from "./WeatherDailyForcast";
import Footer from "./Footer";

export default function Weather(props) {
  let [city, setCity] = useState("");

  let [weather, setWeather] = useState({ loaded: false });

  function showWeather(response) {
    setWeather({
      loaded: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=743bee57fddbfaf52447193a87d5dd25&units=metric`;
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
  if (weather.loaded) {
    return (
      <div className="container">
        <div className="Weather">
          {form}
          <h1 className="text-capitalize"> {city} </h1>
          <ul>
            <li>
              <FormatedDate date={weather.date} />
            </li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>

          <div className="row">
            <div className="col-6">
              <WeatherIcon code={weather.icon} />
              <WeatherTemperature celsius={weather.temperature} />
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}km/hr</li>
              </ul>
            </div>
          </div>
          <WeatherDailyForcast coordinates={weather.coordinates} />
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="Weather">
          {form}
          <h1> {props.defaultCity} </h1>
          <ul>
            <li>Wednesday 07:00</li>
            <li>Clear Sky</li>
          </ul>

          <div className="row">
            <div className="col-6">
              <img
                src="https://cdn3.iconfinder.com/data/icons/weather-solid-daily-forecast/512/Sunny_Day-64.png"
                alt="weather icon"
              />

              <span className="temperature">120</span>
              <span className="unit">°F|°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: 80%</li>
                <li>Wind: 24km/hr</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
