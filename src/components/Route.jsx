import React from 'react';
import PropTypes from 'prop-types';

function Route(props) {
    return (
        <div className="route">
            <div>{props.start}</div>
            <div>{props.end}</div>
            <div>{props.cost}</div>
        </div>    
    );
}

export default Route;