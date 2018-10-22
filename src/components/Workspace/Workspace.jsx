import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';
import { CaseOne, CaseTwo, CaseThree } from './Cases';
import CaseLabel from './CaseLabel';


const cl = block('case-label');

class Workspace extends React.Component {
  constructor() {
    super();
    this.renderCurrentCase = this.renderCurrentCase.bind(this);
  }

  renderCurrentCase(currentCase) {
    const { graph } = this.props;
    switch (currentCase) {
      case 'case1': return <CaseOne graph={graph} />;
      case 'case2': return <CaseTwo graph={graph} />;
      case 'case3': return <CaseThree graph={graph} />;
      default: return <div />;
    }
  }

  render() {
    const { currentCase, onCaseChoose, graph } = this.props;
    return (
      <div>
        {graph.nodes
                    && (
                    <div>
                      <div className="case-label-container">
                        {
                                [
                                  {
                                    id: 'case1',
                                    title: 'CaseOne',
                                    description: 'The delivery cost of route.',
                                  },
                                  {
                                    id: 'case2',
                                    title: 'CaseTwo',
                                    description: 'The number of possible delivery route.',
                                  },
                                  {
                                    id: 'case3',
                                    title: 'CaseThree',
                                    description: 'The cheapest delivery route between two towns.',
                                  },
                                ].map(caseItem => (
                                  <CaseLabel
                                    caseItem = {caseItem}
                                    isChecked = {currentCase === caseItem.id}
                                    onChoose={onCaseChoose}
                                  />
                                  ))
                            }
                      </div>
                      {this.renderCurrentCase(currentCase)}
                    </div>
                    )
                }
      </div>
    );
  }
}

Workspace.propTypes = {
  currentCase: PropTypes.string.isRequired,
  onCaseChoose: PropTypes.func.isRequired,
  graph: PropTypes.shape({ foo: { bar: {} } }).isRequired,
};

export default Workspace;
