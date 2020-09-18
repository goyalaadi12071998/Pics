import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { searchImages } from '../api/unsplash';
import ImageList from '../components/ImageList';

class App extends Component {
    state = { images: [] }

    constructor(props){
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(term) {
        console.log(term);
        const images = await searchImages(term);
        console.log(images);
        this.setState({images: images});
    }

    render() { 
        return (    
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
        </div>

        );
    }
}
 
export default App;