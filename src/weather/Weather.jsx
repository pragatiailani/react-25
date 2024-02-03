import React, { useEffect, useState } from "react";
import "./styles.css";

function Weather() {
  const [search, setSearch] = useState("Ahmedabad");
  const [weatherData, setWeatherData] = useState(null);
  async function fetchWeatherData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  }
  // Function to format UNIX timestamp to date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert UNIX timestamp to milliseconds
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata", // Indian Standard Time
    };
    return date.toLocaleDateString("en-IN", options);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);
  return (
    <div className="weather-app-container">
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={() => fetchWeatherData()}>Get Weather</button>
      </div>
      {weatherData && (
        <div className="weather-data-container">
          <h1 className="city-name">
            {weatherData.name}, {weatherData.sys.country}
          </h1>
          <p>{formatDate(weatherData.dt)}</p>
          <p className="current-temp">
            <img
              id="wicon"
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather icon"
            />
            <span className="temp">
              {(weatherData.main.temp - 273.15).toFixed(2)}&deg;C
            </span>
            {weatherData.weather[0].main}
          </p>
          <p>
            feels like{" "}
            <b>
              {(weatherData.main.feels_like - 273.15).toFixed(2)}
              &deg;C
            </b>
          </p>
          <p>
            min temp:{" "}
            <b>{(weatherData.main.temp_min - 273.15).toFixed(2)}&deg;C </b>
            &nbsp; max temp:{" "}
            <b>
              {(weatherData.main.temp_max - 273.15).toFixed(2)}
              &deg;C
            </b>
          </p>
          <p>
            <b>{weatherData.wind.speed}m/s</b> wind speed
          </p>
          <p>
            <b>{weatherData.main.humidity}%</b> humidity
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
