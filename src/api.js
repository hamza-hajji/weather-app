import axios from 'axios';

export default (city) => {
  const API_KEY = 'f9a81c5778334ea7be5134423171003';
  const URL = `https://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`;
  return axios
          .get(URL)
          .then(response => response.data);
};
