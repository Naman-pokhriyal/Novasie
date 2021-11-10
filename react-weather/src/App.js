import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");

  const URL = "http://api.openweathermap.org/data/2.5/weather";
  const APIkey = "47a816dc539cc44aae5d87dd8963478c";

  const fetchWeather = async () => {
    return await axios
      .get(URL, {
        params: {
          q: query,
          appid: APIkey,
          units: "metric",
        },
      })
      .then((res) => {
        setData(res);
        setQuery("");
      })
      .catch((e) => {
        console.log("error: " + e);
      });
  };
  console.log(data);
  return (
    <div id="wrapper">
      <div className="topInput">
        <input
          className="PInput"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn" onClick={fetchWeather}>
          Search
        </button>
      </div>
      {data && (
        <div className="Pwrapper">
          {" "}
          <div className="PName">{data.data.name}</div>
          <img
            className="Pimg"
            src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}.png`}
            alt="🌡️"
          />
          <div className="Ptemp">{data.data.main.temp} °C</div>
          <div className="Pdesc">{data.data.weather[0].description}</div>
          <div className="Sub">
            <div className="PSub">Humidity: {data.data.main.humidity}%</div>
            <div className="PSub">
              Wind: {data.data.wind.speed}
              <span>m/s</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
