import React, { useState, useEffect  } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Header from "./Header";
import ReactPlayer from "react-player";
import Forecast from "./Forecast";
import DailyHourly from "./DailyHourly";
import News from "./News";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


import "./NavBar.css";

const api = {
  key: "7e09c47f05215794fede9b8c6705e033",
  base: "https://api.openweathermap.org/data/2.5/forecast",
};
function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [Icons, setIcons] = useState();
  const [bgImg, setbgImg] = useState(
    "https://assets.mixkit.co/videos/preview/mixkit-matterhorn-mountain-landscape-4281-large.mp4https://assets.mixkit.co/videos/preview/mixkit-matterhorn-mountain-landscape-4281-large.mp4https://assets.mixkit.co/videos/preview/mixkit-matterhorn-mountain-landscape-4281-large.mp4"
  );
  const [loading, setLoading] = useState(false);
  console.log(bgImg);
  console.log(weather && weather.clouds && weather.clouds.all);
  const iconMap = {
    Clear: "CLEAR_DAY",
    Haze: "FOG",
    Clouds: "CLOUDY",
    Lclouds: "PARTLY_CLOUDY_DAY",
    Rain: "RAIN",
    Snow: "SNOW",
    Fog: "FOG",
    Mist: "FOG",
  };
  const bgImgMap = {
    Clear:
      "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-during-the-night-4308-large.mp4",
    Haze: "https://storage.coverr.co/videos/MAhGo00FYCX83P83Eijwjf5Qi8H97CcWq?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI5NDEyNDQzfQ.9xpSSEvd8ODpRKllhmDXH05gSJSwGMW8BsW-idksK00",
    Clouds:
      "https://assets.mixkit.co/videos/preview/mixkit-dense-layer-of-clouds-before-a-storm-9311-large.mp4",
    Rain: "https://assets.mixkit.co/videos/preview/mixkit-gloomy-forest-full-of-trees-during-a-rainy-afternoon-22729-large.mp4",
    Snow: "https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-snow-falling-in-the-pine-forest-25106-large.mp4",
    Fog: "https://assets.mixkit.co/videos/preview/mixkit-luxury-suv-in-a-foggy-area-near-horses-35539-large.mp4",
    Mist: "https://assets.mixkit.co/videos/preview/mixkit-tree-at-the-center-of-a-meadow-in-a-cloud-28338-large.mp4",
    Lclouds:
      "url(https://images.unsplash.com/photo-1510158105534-9b01f2462ce1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)",
  };
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}?q=${query}&appid=${api.key}&lang=en&units=metric`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);

          let iconCode =
            result &&
            result.list[0] &&
            result.list[0].weather[0] &&
            result.list[0].weather[0].main;
          let cloudDensity = result && result.clouds && result.clouds.all;

          //console.log(result && result.weather && result.weather.list[0] && result.weather.list[0].main && result.weather.list[0].main.feels_like)
          setIcons(iconMap[iconCode]);
          // setIcons(iconMap[
          //   (iconCode === 'Clouds') ?
          //   ((result && result.clouds && result.clouds.all) > 50)
          //     ? 'Clouds':'Lclouds'
          //     : setIcons(iconMap[iconCode])
          // ])

          setbgImg(bgImgMap[iconCode]);
          // setbgImg(bgImgMap[(iconCode === 'Clouds') ?
          // (result && result.clouds && result.clouds.all > 50)
          //   ? 'Mclouds':'Lclouds'
          //   : setbgImg(bgImgMap[iconCode])])
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let time=d.getTime();
    console.log("time ",time)

    return `${day} ${date} ${month}, ${year}`;
  };

  //   let iconUrl= "http://openweathermap.org/img/wn/"+iconCode+".png";
  const defaults = {
    color: "white",
    size: 80,
    animate: true,
  };
  // preloader 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
     setLoading(false);
    },8000);
    
  }, [])
  const override = css`
  display: flex;
  padding:50px;
  justify-content:center;
  border-color: black;
`;
  console.log(weather);
  return (
    <div className="app">
    {
      loading ? (
        <ClipLoader className="loader" color={"#333"} css={override} loading={loading} size={150} />

      ) : (
        <>
      <ReactPlayer className="bgvideo" loop={true} playing={true} url={bgImg} />

      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter city name"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {weather && weather.city && (
          <div className="container">
            {" "}
            {/* main conatainer*/}
            <div className="conatainer_0">
              <div className="location-box">
                <img
                  className="locationIcon"
                  style={{ height: "30px" }}
                  src="https://img-premium.flaticon.com/png/512/869/premium/869161.png?token=exp=1630544826~hmac=3c5cd7603f6b4be22bf63e8becc281a3"
                />
                <div className="location">
                  {weather.city.name}, {weather.city.country}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              </div>
              {/* container_0 ENDS */}
              <div className="conatiner_1">
                <div className="temp">
                  {Math.round(weather.list[0].main.temp - 0)}°C
                  <ReactAnimatedWeather
                    icon={Icons}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                  />
                </div>
                <div className="weather">
                  {weather.list[0].weather[0].main}
                  <br />
                  <div style={{ fontSize: "25px", fontStyle: "italic" }}>
                    {weather.list[0].weather[0].description}
                  </div>
                </div>
                <DailyHourly className="hourlyForecast" weather={weather} />
            
              </div>
              {/* container_1 ENDS */}
            <div className="conatainer_2">
              <div className="extraInfo">
                <div>
                  <img
                    className="extraInfoIcon"
                    src="https://image.flaticon.com/icons/png/512/1843/1843615.png"
                  />
                  FEELS LIKE
                  <br />
                  {weather.list[0].main.feels_like}°C
                </div>
                <div>
                  <img
                    className="extraInfoIcon"
                    src="https://image.flaticon.com/icons/png/512/4005/4005754.png"
                  />
                  HUMIDITY
                  <br />
                  {weather.list[0].main.humidity}%
                </div>
                <div>
                  <img
                    className="extraInfoIcon"
                    src="https://image.flaticon.com/icons/png/512/556/556856.png"
                  />
                  PRESSURE
                  <br />
                  {weather.list[0].main.pressure}mb
                </div>
                <div>
                  <img
                    className="extraInfoIcon"
                    src="https://image.flaticon.com/icons/png/512/2235/2235419.png"
                  />
                  VISIBILITY
                  <br />
                  {weather.list[0].visibility}m
                </div>
                <div>
                  <img
                    className="extraInfoIcon"
                    src="https://image.flaticon.com/icons/png/512/414/414825.png"
                  />
                  CLOUD DENSITY
                  <br />
                  {weather.list[0].weather[0].main === "Clouds"
                    ? " " + weather.list[0].clouds.all + "%"
                    : "0%"}
                  <br />
                </div>
              </div>
            </div>
            {/*container_2 ENDS */}
            <div className="conatiner_3">
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "350",
                  margin: "15px 0px 25px 15px",
                  color: "white",
                }}
              >
                5 DAY FORECAST
              </div>
              <Forecast className="upcomingforecast" weather={weather} />
            </div>
            {/*container_3 ENDS */}
          </div>
        )}
      </main>
      </>
  )
}
    </div>
  );
}

export default App;
