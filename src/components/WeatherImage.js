import React, { useEffect } from "react";
import "./styles/WeatherImage.css";
import wimg01d from "./images/01d.png";
import wimg02d from "./images/02d.png";
import wimg03d from "./images/03d.png";
import wimg04d from "./images/04d.png";
import wimg09d from "./images/09d.png";
import wimg10d from "./images/10d.png";
import wimg11d from "./images/11d.png";
import wimg13d from "./images/13d.png";
import wimg50d from "./images/50d.png";
import wimg01n from "./images/01n.png";
import wimg02n from "./images/02n.png";
import wimg03n from "./images/03n.png";
import wimg04n from "./images/04n.png";
import wimg09n from "./images/09n.png";
import wimg10n from "./images/10n.png";
import wimg11n from "./images/11n.png";
import wimg13n from "./images/13n.png";
import wimg50n from "./images/50n.png";

const WeatherImage = ({ image }) => {
  const getImageFromURL = (image) => {
    const imageMap = {
      wimg01d,
      wimg02d,
      wimg03d,
      wimg04d,
      wimg09d,
      wimg10d,
      wimg11d,
      wimg13d,
      wimg50d,
      wimg01n,
      wimg02n,
      wimg03n,
      wimg04n,
      wimg09n,
      wimg10n,
      wimg11n,
      wimg13n,
      wimg50n,
    };
    return imageMap[image];
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <div className="col-12 weather-image col-sm-8 col-md-6 mt-md-5 text-center">
      <img src={getImageFromURL(image)} alt="" />
    </div>
  );
};

export default WeatherImage;
