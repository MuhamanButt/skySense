import React from 'react'
import "./styles/DetailsSecondary.css";

const DetailsSecondary = ({city,country,weatherCondition}) => {
  return (
    <div className='row justify-content-center'>
      <div className="col-12 text-center details-s-weather">
        <h1>{weatherCondition}</h1>
      </div>
      <div className="col-12 text-center details-s-heading">
       <h1> {city}, {country}</h1>
      </div>
    </div>
  )
}

export default DetailsSecondary
