import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';

function Header(props) {
    return (
        <header>
            <Stats graph={props.graph} />
            <h1>{props.title}</h1>
        </header>
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