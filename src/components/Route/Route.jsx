import React from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';

import './Route.css';

const r = block('route');

function Route({ start, end, cost }) {
  return (
    <li className={r()}>
      <div className={r('start')}>{start}</div>
      <div className={r('end')}>{end}</div>
      <div>{cost}</div>
    </li>
  );
}

Route.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};

export default Route;
