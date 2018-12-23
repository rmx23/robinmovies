import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route} from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieData from "./components/MovieData";


class App extends Component {

  render() {

    return (
      <div className="App">
          <Router>
              <div >
                  <Route path="/" exact component={MovieList}> </Route>
                  <Route path="/:iden" exact component={MovieData}> </Route>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
