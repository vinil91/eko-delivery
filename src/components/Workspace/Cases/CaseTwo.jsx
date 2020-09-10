import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';

import FormWithStops from './FormWithStops';

const r = block('result');

function CaseTwo({ graph, caseInfo }) {
  const [calculatingRoute, setCalculatingRoute] = useState('');
  const [calculatingStops, setCalculatingStops] = useState('');

  const handleEnter = (route, stops) => {
    setCalculatingRoute(route.toUpperCase());
    setCalculatingStops(stops);
  }

  const calculateDeliveryAmount = (route, stops) => {
    return graph.countTripsWithLessThanNStops(route, Number(stops));
  }

  const handleReset = () => {
    setCalculatingRoute('');
    setCalculatingStops('');
  }

  return (
    <div>
      <h2 className="text-with-indent">CaseTwo. The number of possible delivery route that can be construct by the given conditions.</h2>
      <FormWithStops
        onEnter={handleEnter}
        description={caseInfo.description}
        placeholder={caseInfo.placeholder}
      />
      <div>
        {calculatingRoute && calculatingStops && (
          <div className={r()}>
            <div className={r('text')}>
              {calculateDeliveryAmount(calculatingRoute, calculatingStops)}
            </div>
            <button
              className={r('reset-button')}
              onClick={handleReset}
              type="button"
            >
              RESET THE LAST COUNTED ROUTE AND STOPS AMOUNT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

CaseTwo.propTypes = {
  graph: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.any).isRequired,
    vertexes: PropTypes.arrayOf(PropTypes.any).isRequired,
    countTripsWithLessThanNStops: PropTypes.func,
  }).isRequired,
  caseInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
};

export default CaseTwo;
