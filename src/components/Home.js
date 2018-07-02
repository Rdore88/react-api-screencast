import React, { Component } from 'react';

class Home extends Component {
  state = {
    films: [],
    planets: [],
    starships: []
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(info => this.setState({ films: info.results }))

    fetch('https://swapi.co/api/planets')
      .then(response => response.json())
      .then(info => this.setState({ planets: info.results }))

    fetch('https://swapi.co/api/starships')
      .then(response => response.json())
      .then(info => this.setState({ starships: info.results }))
  }

  render() {
    let films = this.state.films.map((film, i) => <li key={i}>{film.title}</li>)
    let planets = this.state.planets.map((planet, i) => <li key={i}>{planet.name}</li>)
    let starships = this.state.starships.map((starship, i) => <li key={i}>{starship.name}</li>)
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
  }
}

export default Home
