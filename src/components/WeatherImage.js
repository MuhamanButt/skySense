import React from 'react'
import "./styles/WeatherImage.css";

const WeatherImage = ({image}) => {
  return (
        <div className="col-12 weather-image col-sm-8 col-md-6">
      <img src={image} alt="" />
        </div>
   
  )
}

export default WeatherImage
