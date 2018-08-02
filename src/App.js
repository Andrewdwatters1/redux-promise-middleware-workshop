import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {getCharacters, deleteCharacter} from './reducer'
import Loading from 'react-loading-animation'

class App extends Component {
  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    let {starWarsCharacters, errorMessage, deleteCharacter} = this.props
    return (
      starWarsCharacters.length 
      ?
      <div className="App">
        {starWarsCharacters.map(character => {
          return (
            <div>
              <p key={character.id}>{character.name}</p>
              <button onClick={() => deleteCharacter(character.id)}>Delete Character</button>
            </div>
          ) 
        })}
      </div>
      :
      errorMessage
      ?
      <div>
        There was an error retrieving your data.
      </div>
      :
      <Loading/>
    );
  }
}

function mapStateToProps(state) {
  return {
    starWarsCharacters: state.starWarsCharacters,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, {getCharacters, deleteCharacter})(App);


// function testing() {
//   //doing stuff
// }

// testing()