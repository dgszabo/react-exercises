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

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            authors: nextProps.book.authors,
            bookshelves: nextProps.book.bookshelves,
            download_count: nextProps.book.download_count,
            formats: nextProps.book.formats,
            languages: nextProps.book.languages,
            media_type: nextProps.book.media_type,
            subjects: nextProps.book.subjects,
            title: nextProps.book.title,
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
                <h5>Authors</h5>
                {this.state.authors.map(el => <div><input type="text" name="" value={el.name} /><input type="text" name="" value={el.birth_year} /><input type="text" name="" value={el.death_year} /> </div>)}
                <h5>Title</h5>
                {<div><input type="text" name="" value={this.state.title} /></div>}
                <h5>Bookshelves</h5>
                {this.state.bookshelves.map(el => <div><input type="text" name="" value={el} /></div>)}
                <h5>Download Count</h5>
                {<div><input type="number" name="" value={this.state.download_count} /></div>}
                <h5>Media Type</h5>
                {<div><input type="text" name="" value={this.state.media_type} /></div>}
                <h5>Languages</h5>
                {this.state.languages.map(el => <div><input type="text" name="" value={el} /> </div>)}
                <h5>Subjects</h5>
                {this.state.subjects.map(el => <div><input type="text" name="" value={el} /> </div>)}
                <h5>Formats</h5>
                {Object.entries(this.state.formats).map(el => <div><input type="text" name="" value={el[0]} /><input type="text" name="" value={el[1]} /></div>)}
                
                <br/>
                <button type="submit">Submit Changes</button>
            </form>
        )
    }
} 