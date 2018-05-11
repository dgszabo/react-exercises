import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BookEditor from './BookEditor';

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      subjects: [],
      chosenSubject: "",
      subjectBooks: [],
      chosenBook: false,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3010/subjects')
      .then(data => {
        this.setState({subjects: [...data.data]});
      })
  }

  choseSubject(subj, event) {
    event.preventDefault();
    this.setState({subjectBooks: []});
    axios.get(`http://localhost:3010/books?subjects_like=${subj}`)
      .then(data => {
        this.setState({chosenSubject: subj, subjectBooks: [...data.data], chosenBook: false})
      });
  }

  choseBook(bookId, event) {
    event.preventDefault();
    let chosenBook = this.state.subjectBooks.filter(book => book.id === bookId)[0];
    this.setState({ chosenBook });
  }

  render() {
    let renderedSubjects = () => {
      if(this.state.subjects.length === 0) {
        return (
          <h3>Fetching subjects...</h3>
        )
      } else {
        return this.state.subjects.map(subj => {
          return <button id={subj + "-btn"} onClick={this.choseSubject.bind(this, subj)}>{subj}</button>
        });
      }
    }

    let renderBooks = () => {
      if(this.state.subjectBooks.length > 0) {
        return (
          <div>
            <h1>Books:</h1>
            {this.state.subjectBooks.map(book => { return <button id={book.id + "-btn"} onClick={this.choseBook.bind(this, book.id)}>{book.title}</button>})}
          </div>
        )
      }
    }

    let renderBookEditor = () => {
      if(this.state.chosenBook) {
        return (
          <div>
            <h1>Book Editor:</h1>
            <BookEditor book={this.state.chosenBook} />
          </div>
        )
      }
    }

    return (
      <div className="App">
        <div>
          <h1>Subjects:</h1>
          {renderedSubjects()}
        </div>
        {renderBooks()}
        {renderBookEditor()}
      </div>
    );
  }
}

export default App;
