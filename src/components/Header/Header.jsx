import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';
import Stats from './Stats';

const h = block('header');

function Header(props) {
  const { graph, title } = props;
  return (
    <div className={h()}>
      <Stats graph={graph} />
      <h1 className={h('title')}>{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  graph: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.any).isRequired,
    vertexes: PropTypes.arrayOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default Header;
