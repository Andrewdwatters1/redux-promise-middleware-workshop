import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {getCharacters} from './reducer'
import Loading from 'react-loading-animation'

class App extends Component {
  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    let {starWarsCharacters, errorMessage} = this.props
    return (
      starWarsCharacters.length 
      ?
      <div className="App">
        {starWarsCharacters.map(character => {
          return <p key={character.id}>{character.name}</p>
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

export default connect(mapStateToProps, {getCharacters})(App);
