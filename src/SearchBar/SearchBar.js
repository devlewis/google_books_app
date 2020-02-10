import React from 'react';

class SearchBar extends React.Component {

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSearchSubmit(this.props.searchTerm,this.props.filter,this.props.printType);
    }
    render(){
        return(
            <form 
            onSubmit={this.onFormSubmit} 
            className="SearchBar">
                <label htmlFor="searchbar">Search: </label>
                <input id="searchbar" 
                       type="text" 
                       value={this.props.searchTerm} 
                       onChange={e => {this.props.searchTermInput(e.target.value); console.log(this.props.searchTerm)}}
                       ></input>
                <button
                >Search</button>
            </form>
        )
    }
}

export default SearchBar;