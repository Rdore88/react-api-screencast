import React, { Component } from 'react';
import  { connect } from 'react-redux';

class Home extends Component {

  render() {
    if (this.props.films && this.props.planets && this.props.starships) {
      let films = this.props.films.map((film, i) => <li key={i}>{film.title}</li>)
      let planets = this.props.planets.map((planet, i) => <li key={i}>{planet.name}</li>)
      let starships = this.props.starships.map((starship, i) => <li key={i}>{starship.title}</li>)
      return (
        <div className="starwars-info">
          <div className="films">
            <h3>All the films</h3>
            {films}
          </div>
          <div className="planets">
            <h3>All the Planets</h3>
            {planets}
          </div>
          <div className="starships">
            <h3>All the Starships</h3>
            {starships}
          </div>
        </div>
      )
    } else {
      return <h1> Loading </h1>
    }

  }
}

function mapStateToProps(state){
  console.log(state);
  return {
    films: state.films,
    planets: state.planets,
    starships: state.starships
  }
}

function mapDispatchToProps(dispatch){
 return {

 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
