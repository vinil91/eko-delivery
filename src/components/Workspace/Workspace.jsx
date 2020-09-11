import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CaseOne, CaseTwo, CaseThree } from './Cases';
import { CaseLabel } from '..';

import './Workspace.css';
import './Cases.css';

import caseData from './case-data';

function Workspace({ currentCase, graph }) {
  const renderCurrentCase = (curCase) => {
    switch (curCase) {
      case 'case1': return <CaseOne graph={graph} caseInfo={caseData[0]} />;
      case 'case2': return <CaseTwo graph={graph} caseInfo={caseData[1]} />;
      case 'case3': return <CaseThree graph={graph} caseInfo={caseData[2]} />;
      default: return <div />;
    }
  }
  return (
    <div className="workspace">
      <ul className="case-label-container">
        {
          caseData.map((caseItem) => (
            <CaseLabel
              key={caseItem.id}
              caseItem={caseItem}
              isChecked={currentCase === caseItem.id}
            />
          ))
        }
      </ul>
      {renderCurrentCase(currentCase)}
    </div>
  );
}

Workspace.propTypes = {
  currentCase: PropTypes.string.isRequired,
  graph: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.any).isRequired,
    vertexes: PropTypes.arrayOf(PropTypes.any).isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    graph: state.graph,
    currentCase: state.currentCase
  }
}

export default connect(mapStateToProps)(Workspace);
