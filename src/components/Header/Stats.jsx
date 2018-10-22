import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';

const s = block('stats');

function Stats(props) {
  const { graph: { edges, vertexes } } = props;

  const routes = edges ? edges.length : 0;
  const cities = vertexes ? vertexes.length : 0;

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
    edges: PropTypes.array,
    vertexes: PropTypes.array,
  }),
};

Stats.defaultProps = {
  graph: {
    edges: [],
    vertexes: [],
  },
};

export default Stats;
