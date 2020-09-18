import React, { Component } from 'react';

class SearchBar extends Component {
    state = { 
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() { 
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="feild">
                    <label><strong>Image Search</strong></label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(event) => this.setState({term: event.target.value})} 
                    />
                </div>
            </form>
        </div>
        );
    }
}
 
export default SearchBar;