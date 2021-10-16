import React from 'react';
import spinner from '../gif/spinner.gif'

const Loader = () => {
    return (

        <div>
            
            <img src={spinner} alt="loader"/>
            <br/>
            <h1> Loading...</h1>
        </div>
    );
};

export default Loader;