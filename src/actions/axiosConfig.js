import axios from 'axios'

const baseAPI = axios.create();
baseAPI.defaults.baseURL = 'https://swapi.co/api/';

const api = {
  fetch: (url) => {
    return baseAPI.get(url)
  }
}

const endPoints = {
  ships: 'starships',
  planets: 'planets',
  films: 'films'
}

export {
  api,
  endPoints
}
