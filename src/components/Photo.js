import React from 'react';
import './styles.css';

const Photo = props => {
    return (
        <div className="d-flex flex-row flex-wrap">
            <source media="(min-width: 400px)" srcset={props.photo} />
            <img className="img-fluid" src={props.photo} alt="cars"/>
        </div>
    );
}

export default Photo;