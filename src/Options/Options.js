import React from 'react';

class Options extends React.Component {
    onPrintTypeChange(value) {
        console.log(value);
        this.props.printTypeChanged(value);
    }

    onFilterChange(value) {
        console.log(value);
        this.props.filterChanged(value);
    }

    render(){
        return(
            <form className="Options">
                <label htmlFor="print-type">Print Type:</label>
                <select onChange={e => this.onPrintTypeChange(e.target.value)} id="print-type" value={this.props.printType}>
                    <option value = "all">All</option>
                    <option value = "books">Books</option>
                    <option value = "magazines">Magazines</option>
                </select>

                <label htmlFor="book-type">Book Type:</label>
                <select onChange={e=> this.onFilterChange(e.target.value)} id="book-type" value={this.props.filter}>
                    <option value = "">No Filter</option>
                    <option value = "ebooks"
                        >Ebooks</option>
                    <option value = "free-ebooks"
                        >Free Ebooks</option>
                    <option value = "paid-ebooks"
                        >Paid Ebooks</option>
                </select>
            </form>
        )
    }
}

export default Options;
