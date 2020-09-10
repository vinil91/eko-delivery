import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';

import { Form } from '../..';

const r = block('result');

function CaseThree({ graph, caseInfo }) {
  const [calculatingRoute, setCalculatingRoute] = useState('');

  const handleEnter = (route) => {
    setCalculatingRoute(route.toUpperCase());
  }

  const calculateCheapestCost = (route) => {
    return graph.findBestPath(route);
  }

  const handleReset = () => {
    setCalculatingRoute('');
  }

  return (
    <div>
      <h2 className="text-with-indent">CaseThree. The cheapest delivery route between two towns.</h2>
      <Form
        caseForm
        caseAB
        onEnter={handleEnter}
        description={caseInfo.description}
        placeholder={caseInfo.placeholder}
      />
      <div>
        {calculatingRoute && (
          <div className={r()}>
            <div className={r('text')}>{calculateCheapestCost(calculatingRoute)}</div>
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

CaseThree.propTypes = {
  graph: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.any).isRequired,
    vertexes: PropTypes.arrayOf(PropTypes.any).isRequired,
    findBestPath: PropTypes.func,
  }).isRequired,
  caseInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
};

export default CaseThree;
