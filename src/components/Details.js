import React from "react";
import "./styles/Details.css";
import iconhumidity from "./images/iconhumidity.png";
import iconpressure from "./images/iconpressure.png";
import iconwind from "./images/iconwind.png";

const Details = ({
  day,
  hour,
  min,
  timezone,
  humidity,
  windspeed,
  pressure,
  temprature,
  feelslike,
}) => {
  return (
    <div className="col-12 col-md-6 mt-4 mt-md-5 col-xl-4 align-self-center">
      <div className="row details">
        <div className="col-8 col-md-12">
          <h6 className="mb-4 details-heading">
            Last Updated : <br />{day},{hour}:{min} PST
            <br />
          </h6>
          <div className="col details-icons">
            <img src={iconhumidity} className="details-icon-img" /> Humidity :{" "}
            {humidity}
            <br />
          </div>
          <div className="col details-icons">
            <img src={iconpressure} className="details-icon-img" /> Pressure :{" "}
            {pressure}
            <br />
          </div>
          <div className="col details-icons">
            <img src={iconwind} className="details-icon-img" /> Windspeed :{" "}
            {windspeed}
            <br />
          </div>
        </div>
        <div className="col-4 col-md-12 mt-md-5 align-self-end">
          <h1 className=" details-heading">{temprature}°C</h1>
          <p>Feels like {feelslike}°C</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
