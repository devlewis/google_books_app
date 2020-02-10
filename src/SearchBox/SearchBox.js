import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js'
import Options from '../Options/Options.js'

class SearchBox extends React.Component {
    render() {
        return (
            <section className="SearchBox">
                <SearchBar
                    results={this.props.results}
                    onSearchSubmit={this.props.onSearchSubmit}
                    searchTermInput={this.props.searchTermInput}
                    searchTerm={this.props.searchTerm}
                    printType={this.props.printType}
                    printTypeChanged={this.props.printTypeChanged}
                    filter={this.props.filter}
                    filterChanged={this.props.filterChanged} />
                <Options
                    printType={this.props.printType}
                    printTypeChanged={this.props.printTypeChanged}
                    filter={this.props.filter}
                    filterChanged={this.props.filterChanged}
                    searchTermInput={this.props.searchTermInput}
                />
            </section>
        )
    }
}

export default SearchBox;



