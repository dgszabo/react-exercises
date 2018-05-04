import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: "",
      letters: {},
      livesLeft: 5,
      guess: "",
      youWon: false,
      lastWrongLetter: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount() {
    let word = this.props.words[Math.floor(this.props.words.length * Math.random())];
    let letters = {}
    word.split('').forEach(el => {
      if(!letters[el]) {
        letters[el] = 1;
      } else {
        letters[el]++;
      }
    });
    this.setState({ word, letters })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let guess = this.state.guess.toLowerCase();
    event.target.reset();
    if(this.state.letters[guess] && this.state.letters[guess] > 0) {
      this.setState(prevState => {
        let newState = {...prevState}
        newState.letters[guess] = 0;
        newState.lastWrongLetter = "";
        let score = Object.values(this.state.letters).reduce((sum, a) => {return sum + a}, 0)
        if(score === 0) {
          newState.youWon = true;
        }
        return newState;
      });
    } else {
      this.setState(prevState => {
        let newState = {...prevState};
        newState.lastWrongLetter = guess;
        newState.livesLeft--;
        return newState;
      });
    }
  }

  restart(event) {
    event.preventDefault();
    let newState = {
      word: "",
      letters: {},
      livesLeft: 5,
      guess: "",
      youWon: false,
      lastWrongLetter: "",
    }
    newState.word = this.props.words[Math.floor(this.props.words.length * Math.random())];
    let letters = newState.letters
    newState.word.split('').forEach(el => {
      if(!letters[el]) {
        letters[el] = 1;
      } else {
        letters[el]++;
      }
    });

    this.setState(newState);
  }
  
  render() {
    let playOrGameOverArea = () => {
      if(this.state.livesLeft > 0) {
        return (
          <div>
            <h2>Take a guess!</h2>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="guess">Your guess</label>
              <input type="text" className="form-control" name="guess" id="guess" aria-describedby="inputLetter" placeholder="Enter letter" maxLength="1" onChange={this.handleChange} />
              <small id="guess" className="form-text text-muted">You can enter one letter of the English alphabet</small>
            </div>
            <button className="btn btn-secondary btn-sm" type="submit">Submit your guess!</button>
            </form>
          </div>
        )
      } else {
        return (
        <div>
          <h2>Game over!</h2>
          <h4>Better luck next time!</h4>
        </div>
        )
      }
    }

    let wrongLetterMessage = () => {
      if(this.state.lastWrongLetter !== "") {
        return <h5>there are no more {this.state.lastWrongLetter}'s in this word</h5>
      }
    }

    let youWonScreen = () => {
      return (
        <div className="cover">
          <div className="youWonMsg">
            <h1>Congratulations, you won!</h1>
            <button className="btn btn-info btn-lg" onClick={this.restart}>New game</button>
          </div>
        </div>
      )
    }

    return (
      <div className="App">
        <div className="container">
          {playOrGameOverArea()}
          <br/>
            {wrongLetterMessage()}
          <br/>
          <h3>You have {this.state.livesLeft} lives left!</h3>
        </div>
        {this.state.youWon ? youWonScreen() : ""}
      </div>
    );
  }
}

App.defaultProps = {
  words: [
    "apple",
    "lemon",
    "orange",
    "pear",
  ]
}

export default App;
