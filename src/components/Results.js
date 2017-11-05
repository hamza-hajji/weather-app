import React, { Component } from 'react';

import Loader from './Loader';

export default ({
  data,
  isLoading,
  success,
  isC,
  changeUnit
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
            <h3>
              {isC ? current.temp_c : current.temp_f}
              <span
                onClick={changeUnit}
                className="unit">{isC ? '°C' : '°F'}</span>
          </h3>
          </div>
        ) : null
      }
    </div>
  );
};
