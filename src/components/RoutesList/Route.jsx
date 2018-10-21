import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';

const r = block('route');

function Route(props) {
    return (
        <div className={r()}>
            <div className={r('start')}>{props.start}</div>
            <div className={r('end')}>{props.end}</div>
            <div>{props.cost}</div>
        </div>    
    );
}

export default Route;