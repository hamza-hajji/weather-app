import fetchWeather from './api';
import {
  LOADING_DATA,
  LOADING_DATA_SUCCESS,
  LOADING_DATA_FAILURE
} from './constants';

export function getData() {
  return {
    type: LOADING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: LOADING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: LOADING_DATA_FAILURE
  }
}

export function loadData(city) {
  return (dispatch) => {
    dispatch(getData());
    fetchWeather(city)
      .then(data => {dispatch(getDataSuccess(data))})
      .catch(error => console.log(error));
  };
}
