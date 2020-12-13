import React, { Component }from 'react';

class SearchBar extends Component {
    state = { 
        value: ''
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render() { 
        return (
            <div style={{ margin: 10, padding: 10 }}>
                <label className="search"><strong>Search Images</strong></label>
                <form onSubmit={this.onFormSubmit}>
                    <div className="col-md-12">
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Search" 
                            aria-label="Search"
                            onChange={(event) => this.setState({value: event.target.value})}
                        >
                        </input>
                    </div>
                    
                </form>
            </div>
        );
    }
}
 
export default SearchBar;