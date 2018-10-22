import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';

const r = block('route');

function Route(props) {
  const { start, end, cost } = props;
  return (
    <div className={r()}>
      <div className={r('start')}>{start}</div>
      <div className={r('end')}>{end}</div>
      <div>{cost}</div>
    </div>
  );
}

export default Route;
