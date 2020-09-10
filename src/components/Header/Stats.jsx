import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { block } from 'bem-cn';

const s = block('stats');

function Stats({ graph: { edges, vertexes } }) {
  const routes = edges.length;
  const cities = vertexes.length;
  return (
    <table className={s()}>
      <tbody>
        <tr>
          <th className={s('th')}>ROUTES AVAILABLE:</th>
          <td className={s('td')}>{routes}</td>
        </tr>
        <tr>
          <th className={s('th')}>CITIES COVERED:</th>
          <td className={s('td')}>{cities}</td>
        </tr>
      </tbody>
    </table>
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
