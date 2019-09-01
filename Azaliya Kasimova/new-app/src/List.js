import React from 'react';
import './App.css';
import data from './db.json';

function Pokemon(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img 
        src = {process.env.PUBLIC_URL +'/pokemons/' + props.pokemon.id + '.png'}
        alt = {props.pokemon.name}/>
      </div>
      <h3>{props.pokemon.name}</h3>
      <input type="button" value="CATCH"></input>
    </div>
  )
}

class List extends React.Component {
  renderPokemons() {
    return data.pokemons.map(pokemon => {
      return (
        <Pokemon pokemon = {pokemon} key = {pokemon.id} />
      )
    }).slice(0, 720)
  }

  render() {
    return(
      <div className = "app">
        <div className = "list">
          {this.renderPokemons()}
        </div>
      </div>
    )
  }
}

export default List;