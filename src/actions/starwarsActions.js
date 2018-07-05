import { api, endPoints } from './axiosConfig';

function setFilms(info) {
  return {
    type: 'SET_FILMS',
    payload: info
  };
}

function setPlanets(info) {
  return {
    type: 'SET_PLANETS',
    payload: info
  };
}

function setStarships(info) {
  return {
    type: 'SET_STARSHIPS',
    payload: info
  };
}

export function fetchStarships() {
  return dispatch => {
    return api.fetch(endPoints.ships)
      .then(response => {
        dispatch(setStarships(response.data.results))
        return "this worked"
      })
      .catch(err => console.log(err))
  }
}

export function fetchPlanets() {
  return dispatch => {
    api.fetch(endPoints.planets)
      .then(response => dispatch(setPlanets(response.data.results)))
      .catch(err => console.log(err))
  }
}

export function fetchFilms() {
  return dispatch => {
    api.fetch(endPoints.films)
      .then(response => dispatch(setFilms(response.data.results)))
      .catch(err => console.log(err))
  }
}
