import React, { Component } from 'react';

class SearchBar extends Component {
    state = {  }

    onInputChange(event) {
        console.log(event.target.value);
    }

    render() { 
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="feild">
                    <label><strong>Image Search</strong></label>
                    <input type="text" onChange={this.onInputChange} />
                </div>
            </form>
        </div>
        );
    }
}
 
export default SearchBar;