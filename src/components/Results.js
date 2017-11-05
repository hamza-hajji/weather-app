import React, { Component } from 'react';

import Loader from './Loader';

export default ({
  data,
  isLoading,
  success
}) => {
  const {
    current,
    location
  } = data;
  console.log(data, current, success);
  return (
    <div id="results">
      {isLoading ? <Loader /> : null}
      {
        success
        ?
        (
          <div>
            <img src={current.condition.icon} alt={current.condition.text} />
            <h3>{location.name}, {location.country}</h3>
            <h3>{current.condition.text}</h3>
            <h3>{current.temp_c}<span className="unit">°C</span></h3>
          </div>
        ) : null
      }
    </div>
  );
};
