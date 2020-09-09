import React from 'react';
import PropTypes from 'prop-types';

import { CaseOne, CaseTwo, CaseThree } from './Cases';
import CaseLabel from './CaseLabel';

import caseData from './case-data';

class Workspace extends React.Component {
  constructor() {
    super();
    this.renderCurrentCase = this.renderCurrentCase.bind(this);
  }

  renderCurrentCase(currentCase) {
    const { graph } = this.props;
    switch (currentCase) {
      case 'case1': return <CaseOne graph={graph} caseInfo={caseData[0]} />;
      case 'case2': return <CaseTwo graph={graph} caseInfo={caseData[1]} />;
      case 'case3': return <CaseThree graph={graph} caseInfo={caseData[2]} />;
      default: return <div />;
    }
  }

  render() {
    const { currentCase, onCaseChoose, graph } = this.props;
    const atLeastOneEdge = graph.edges.length > 0;
    return (
      <div>
        {atLeastOneEdge > 0 && (
          <div>
            <div className="case-label-container">
              {
                caseData.map((caseItem) => (
                  <CaseLabel
                    key={caseItem.id}
                    caseItem={caseItem}
                    isChecked={currentCase === caseItem.id}
                    onChoose={onCaseChoose}
                  />
                ))
              }
            </div>
            {this.renderCurrentCase(currentCase)}
          </div>
        )}
      </div>
    );
  }
}

Workspace.propTypes = {
  currentCase: PropTypes.string.isRequired,
  onCaseChoose: PropTypes.func.isRequired,
  graph: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.any).isRequired,
    vertexes: PropTypes.arrayOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default Workspace;
