import React, { Component } from 'react';

export default class BookEditor extends Component {
    constructor(props) {
        super(props),
        this.state = {
            authors: [],
            bookshelves: [],
            download_count: 0,
            formats: {},
            languages: [],
            media_type: "",
            subjects: [],
            title: "",
        }
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

    render() {
        return (
            <form action="#">
                <button type="submit">Submit Changes</button>
            </form>
        )
    }
} 