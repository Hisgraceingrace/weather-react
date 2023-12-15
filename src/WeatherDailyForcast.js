import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDailyForcast.css";
export default function WeatherDailyForcast() {
  return (
    <div className="WeatherDailyForcast">
      <div className="row">
        <div className="col">
          <div className="WeatherDailyForcast-day"> Thu</div>
        </div>
        <WeatherIcon code="04d" size={1000} />
        <div className="WeatherDailyForcast-temperatures">
          <span className="WeatherDailyForcast-temperature-max"> 19° </span>
          <span className="WeatherDailyForcast-temperature-min">10° </span>
        </div>
        <div className="col">
          <div className="WeatherDailyForcast-day"> Thu</div>
        </div>
        <WeatherIcon code="04d" size={1000} />
        <div className="WeatherDailyForcast-temperatures">
          <span className="WeatherDailyForcast-temperature-max"> 19° </span>
          <span className="WeatherDailyForcast-temperature-min">10° </span>
        </div>
        <div className="col">
          <div className="WeatherDailyForcast-day"> Thu</div>
        </div>
        <WeatherIcon code="04d" size={1000} />
        <div className="WeatherDailyForcast-temperatures">
          <span className="WeatherDailyForcast-temperature-max"> 19° </span>
          <span className="WeatherDailyForcast-temperature-min">10° </span>
        </div>
      </div>
    </div>
  );
}
