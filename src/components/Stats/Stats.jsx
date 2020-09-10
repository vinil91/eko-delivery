import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { block } from 'bem-cn';

import './Stats.css'

const s = block('stats');

function Stats({ graph: { edges, vertexes } }) {
  const routes = edges.length;
  const cities = vertexes.length;
  return (
    <div className={s()}>
      <div className={s('row')}>
        <div className={s('name')}>ROUTES AVAILABLE:</div>
        <div className={s('value')}>{routes}</div>
      </div>
      <div className={s('row')}>
        <div className={s('name')}>CITIES COVERED:</div>
        <div className={s('value')}>{cities}</div>
      </div>
    </div>
  );
}

Stats.propTypes = {
  graph: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.any),
    vertexes: PropTypes.arrayOf(PropTypes.any),
  }),
};

Stats.defaultProps = {
  graph: {
    edges: [],
    vertexes: [],
  },
};

function mapStateToProps(state) {
  return {
    graph: state.graph
  }
}

export default connect(mapStateToProps)(Stats);
