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
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(info => dispatch(setStarships(info.results)))
    .catch(err => console.log(err))
  }
}

export function fetchPlanets() {
  return dispatch => {
    fetch('https://swapi.co/api/planets')
    .then(response => response.json())
    .then(info => dispatch(setPlanets(info.results)))
    .catch(err => console.log(err))
  }
}

export function fetchFilms() {
  return dispatch => {
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(info => dispatch(setFilms(info.results)))
    .catch(err => console.log(err))
  }
}
