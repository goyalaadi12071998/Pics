import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import axios from 'axios';


class App extends Component {
    
    state = {
        photos: []
    }

    onSearchSubmit = async (term) => {
        async function getPhotos(term) {
            const photos = await axios.get('https://api.unsplash.com/search/photos',{
                params: { query: term, page: 2, per_page: 20},
                headers: {
                    Authorization: 'Client-ID e5pXeED7O3xD3mcZcaxR81Q8U-FjS6vCiulb6_ETI6o'
                }
            });
            return photos.data.results;
        }
        const photos = await getPhotos(term);
        this.setState({photos: photos});
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">    
                        <SearchBar onSubmit={this.onSearchSubmit} />
                    </div>
                    <div className="col-md-12">
                        <Gallery photos={this.state.photos} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;