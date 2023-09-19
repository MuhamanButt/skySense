import "./App.css";
import Header from "./components/header";
import bgnight from "./components/images/bgnight.png";
import bgday from "./components/images/bgday.png";
import SearchBar from "./components/SearchBar";
import WeatherImage from "./components/WeatherImage";
import Details from "./components/Details";
import DetailsSecondary from "./components/DetailsSecondary";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
function App() {
  const [cityName, setcityName] = useState("lahore");
  const [weatherImage, setweatherImage] = useState("");
  const [weatherCondition, setweatherCondition] = useState("");
  const [feelsLike, setfeelsLike] = useState(0);
  const [temprature, settemprature] = useState(0);
  const [pressure, setpressure] = useState(0);
  const [Data, setData] = useState();
  const [minute, setminute] = useState(0);
  const [hour, sethour] = useState(0);
  const [timezone, settimezone] = useState("");
  const [country, setcountry] = useState("");
  const [Humidity, setHumidity] = useState(0);
  const [wind, setwind] = useState("");
  const [day, setday] = useState("");
  const [backGroundImage, setbackGroundImage] = useState("");
  const [LoaderFlag, setLoaderFlag] = useState(true);
  const [errorFlag, seterrorFlag] = useState(false);
  const getCityData = async (city) => {
    seterrorFlag(false);
    setLoaderFlag(true);
    try {
      const result = (
        await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab0ed9fb9fb2e3dc62f6dff57220a47c`
        )
      ).data;
      setweatherImage(`wimg${result.weather[0].icon}`);
      setweatherCondition(result.weather[0].description);
      setfeelsLike(Math.round((result.main.feels_like - 273.15) * 10) / 10);
      settemprature(Math.round((result.main.temp - 273.15) * 10) / 10);
      setpressure(result.main.pressure);
      setHumidity(result.main.humidity);
      setcityName(result.name);
      setwind(result.wind.speed);
      const unixTimestamp = result.dt;
      const dateTime = new Date(unixTimestamp * 1000);
      const formattedTime = dateTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      sethour(formattedTime.split(":")[0]);
      setminute(formattedTime.split(":")[1]);
      setcountry(result.sys.country);
      settimezone(
        dateTime
          .toLocaleTimeString("en-US", { timeZoneName: "short" })
          .split(" ")[1]
          .toLowerCase()
      );
      setday(daysOfWeek[dateTime.getUTCDay()]);

      if (result.weather[0].icon[result.weather[0].icon.length - 1] === "d") {
        setbackGroundImage(bgday);
      } else {
        setbackGroundImage(bgnight);
      }
      setLoaderFlag(false);
    } catch (error) {
      seterrorFlag(true);
    }
  };

  useEffect(() => {
    getCityData(cityName);
  }, [cityName]);

  return (
    <div
      className="App container-fluid px-sm-5 pb-5"
      style={{ backgroundImage: `url(${bgnight})` }}
    >
      <Header></Header>
      <SearchBar getCityData={getCityData}></SearchBar>
     { errorFlag ? (
        <h1 className="text-danger">Error!! city doesn't exist</h1>
      ) : (
      LoaderFlag ? (
        <Loader text={"Analyzing The Clouds..."}></Loader>
      ) : 
        (<div className="row justify-content-center align-self-center fade-in-left">
          <Details
            day={day}
            hour={hour}
            min={minute}
            timezone={timezone}
            humidity={`${Humidity}%`}
            windspeed={wind}
            pressure={pressure}
            temprature={temprature}
            feelslike={feelsLike}
          ></Details>
          <WeatherImage image={weatherImage}></WeatherImage>
          <DetailsSecondary
            city={cityName}
            country={country}
            weatherCondition={weatherCondition}
          ></DetailsSecondary>
        </div>)
      )}
    </div>
  );
}

export default App;
