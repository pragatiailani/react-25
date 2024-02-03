import React, { useEffect, useState } from "react";

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
  useEffect(() => {
    fetchWeatherData();
  }, []);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={() => fetchWeatherData()}>Get Weather</button>
      {weatherData && (
        <div>
          <h1>
            {weatherData.name}, {weatherData.sys.country}
          </h1>
          <p>wind speed: {weatherData.wind.speed}m/s</p>
          <p>weather: {weatherData.weather[0].main}</p>
          <img
            id="wicon"
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="Weather icon"
          />
          <p>temp: {(weatherData.main.temp - 273.15).toFixed(2)}</p>
          <p>
            feels like temp: {(weatherData.main.feels_like - 273.15).toFixed(2)}
          </p>
          <p>min temp: {(weatherData.main.temp_min - 273.15).toFixed(2)}</p>
          <p>max temp: {(weatherData.main.temp_max - 273.15).toFixed(2)}</p>
          <p>humidity: {weatherData.main.humidity}%</p>
          <p>date: {weatherData.dt}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
