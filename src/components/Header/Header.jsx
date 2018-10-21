import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';

import { block } from 'bem-cn';

const h = block('header');

function Header(props) {
    return (
        <div className={h()}>
            <Stats graph={props.graph} />
            <h1 className={h('title')}>{props.title}</h1>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    graph: PropTypes.object
};

Header.defaultProps = {
    title: "Title is required"
};

export default Header;