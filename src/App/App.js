import React from 'react';
import SearchBox from '../SearchBox/SearchBox.js';
import ResultsList from '../ResultsList/ResultsList.js'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      results: [],
      searchTerm: "",
      printType: "all",
      filter: "",
      error: null
    };
  }

  filterChanged = (filter) => {
    this.setState({
      filter
    });
  }

  printTypeChanged = (printType) => {
    this.setState({
      printType
    })
  }

  searchTermInput = (searchTerm) => {
    this.setState({
      searchTerm
    })
  }

  onSearchSubmit = (searchTerm, filter, printType) => {
    console.log(searchTerm);
    let filterObject = {
      searchTerm: searchTerm,
      filter: filter,
      printType: printType
    }

    let FILTERS_QUERY_STRING = Object.keys(filterObject)
      .filter(key => !!(filterObject[key]))
      .map(key => `${key}=${filterObject[key]}`)
      .join('&')

    fetch('https://www.googleapis.com/books/v1/volumes?q=' + FILTERS_QUERY_STRING)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const results = Object.keys(data.items)
          .map(key => data.items[key].volumeInfo);
        this.setState({ results });
        console.log(this.state.results);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Google Book Search
        </header>
        <SearchBox
          results={this.state.results}
          onSearchSubmit={this.onSearchSubmit}
          printType={this.state.printType}
          printTypeChanged={this.printTypeChanged}
          filter={this.state.filter}
          filterChanged={this.filterChanged}
          searchTerm={this.state.searchTerm}
          searchTermInput={this.searchTermInput}
        />
        <ResultsList
          results={this.state.results} 
        />
      </div>
    );
  }
}

export default App;
