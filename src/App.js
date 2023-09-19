import "./App.css";
import Header from "./components/header";
import bgnight from "./components/images/bgnight.png";
import bgday from "./components/images/bgday.png";
import SearchBar from "./components/SearchBar";
import WeatherImage from "./components/WeatherImage";
import wimg01d from "./components/images/01d.png";
import wimg02d from "./components/images/02d.png";
import wimg03d from "./components/images/03d.png";
import wimg04d from "./components/images/04d.png";
import wimg09d from "./components/images/09d.png";
import wimg10d from "./components/images/10d.png";
import wimg11d from "./components/images/11d.png";
import wimg13d from "./components/images/13d.png";
import wimg50d from "./components/images/50d.png";
import wimg01n from "./components/images/01n.png";
import wimg02n from "./components/images/02n.png";
import wimg03n from "./components/images/03n.png";
import wimg04n from "./components/images/04n.png";
import wimg09n from "./components/images/09n.png";
import wimg10n from "./components/images/10n.png";
import wimg11n from "./components/images/11n.png";
import wimg13n from "./components/images/13n.png";
import wimg50n from "./components/images/50n.png";
import Details from "./components/Details";
import DetailsSecondary from "./components/DetailsSecondary";
import axios from "axios";
import { useEffect, useState } from "react";

// {
//   "coord": {
//     "lon": 67.0822,
//     "lat": 24.9056
//   },
//   "weather": [
//     {
//       "id": 721,
//       "main": "Haze",
//       "description": "haze",
//       "icon": "50d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 308.05,
//     "feels_like": 313.21,
//     "temp_min": 308.05,
//     "temp_max": 308.05,
//     "pressure": 1003,
//     "humidity": 49
//   },
//   "visibility": 5000,
//   "wind": {
//     "speed": 6.17,
//     "deg": 220
//   },
//   "clouds": {
//     "all": 75
//   },
//   "dt": 1695115964,
//   "sys": {
//     "type": 1,
//     "id": 7576,
//     "country": "PK",
//     "sunrise": 1695086339,
//     "sunset": 1695130352
//   },
//   "timezone": 18000,
//   "id": 1174872,
//   "name": "Karachi",
//   "cod": 200
// }

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
  const getCityData = async (city) => {
    try {
      const result = (
        await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab0ed9fb9fb2e3dc62f6dff57220a47c`
        )
      ).data;
      console.log(result.dt);
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
    } catch (error) {
      console.error("Error fetching weather data:", error);
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
      <div className="row justify-content-center align-self-center ">
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
      </div>
    </div>
  );
}

export default App;
