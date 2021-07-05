import React from 'react';
import './head.css';

const Head = ({ heading, details }) => {
    return (
        <div className='header-container'>
         
            <h1>{heading}</h1>
            <br/>
            <br/>
           <span> <p>{details}</p></span>
        </div>
    );
};

export default Head;