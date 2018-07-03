import update from 'immutability-helper';

const initialState = {
  films: null,
  planets: null,
  starships: null,
}

const starwarsReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'SET_STARSHIPS':
      return update(state, {
        starships: {
          $set: action.payload
        }
      })
    case 'SET_FILMS':
      return update(state, {
        films: {
          $set: action.payload
        }
      })
    case 'SET_PLANETS':
      return update(state, {
        planets: {
          $set: action.payload
        }
      })
    default:
      return state;
  }
}

export default starwarsReducer;
