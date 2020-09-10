import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';

import { Form } from '../..';

const r = block('result');

function CaseOne({ graph, caseInfo }) {
  const [calculatingRoute, setCalculatingRoute] = useState('');

  const handleEnter = (route) => {
    setCalculatingRoute(route.toUpperCase());
  }

  const calculateCost = (route) => {
    return graph.countPathWeight(route);
  }

  const handleReset = () => {
    setCalculatingRoute('');
  }

  return (
    <div>
      <h2 className="text-with-indent">CaseOne. The delivery cost of route.</h2>
      <Form
        caseForm
        onEnter={handleEnter}
        description={caseInfo.description}
        placeholder={caseInfo.placeholder}
      />
      <div>
        {calculatingRoute && (
          <div className={r()}>
            <div className={r('text')}>{calculateCost(calculatingRoute)}</div>
            <button
              className={r('reset-button')}
              onClick={handleReset}
              type="button"
            >
              RESET THE LAST COUNTED ROUTE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

CaseOne.propTypes = {
  graph: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.any).isRequired,
    vertexes: PropTypes.arrayOf(PropTypes.any).isRequired,
    countPathWeight: PropTypes.func,
  }).isRequired,
  caseInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
};

export default CaseOne;
