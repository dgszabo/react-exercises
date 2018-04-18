import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import AllTrucks from './AllTrucks'
import NewTruckForm from './NewTruckForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        trucks: [ ]
    }
    this.addTruck = this.addTruck.bind(this)
  }

  addTruck(newTruck) {
      this.setState(prevState => {
          let newState = {...prevState}
          newState.trucks = [newTruck, ...prevState.trucks];
          return newState;
      });
  }

  componentDidMount() {
    if(localStorage.trucks) {
      let trucks = JSON.parse(localStorage.getItem('trucks'));
      this.setState({ trucks })
    }
  }

  componentDidUpdate() {
    let trucks = JSON.stringify(this.state.trucks);
    localStorage.setItem('trucks', trucks);
  }

  
  render() {
    return (
      <div className="App">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-truck-moving"></i>
            <span className="ml-1">truckU</span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/new" className="nav-link">add new truck</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">all trucks</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container"></div>

        {/* ROUTES */}
        <div className="container">
          <Route path="/" exact render={props => <AllTrucks trucks={this.state.trucks} {...props} />} />
          <Route path="/new" render={props => <NewTruckForm addTruck={this.addTruck} {...props} />} />
        </div>
        
      </div>
    );
  }
}

export default App;
