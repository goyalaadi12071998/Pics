import React from 'react';
import Photo from './Photo';

const Gallery = props => {
    if(props.photos.length === 0) {
        return <div>No phtos found</div>
    }
    return (
        <div style={{ backgroundColor: 'lightGray', height: '100%', padding: 10, margin: 10 }}>
            {props.photos.map((photo) => {
                return (
                    <Photo photo={photo.urls.regular} key={photo.id} />
                )
            })}
        </div>
    );
}

export default Gallery;