import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';
import Form from '../../Form';

const r = block('result');

class CaseThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculatingRoute: '',
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleEnter(route) {
    const calculatingRoute = route.toUpperCase();
    this.setState({ calculatingRoute });
  }

  calculateCheapestCost(route) {
    const { graph } = this.props;
    return graph.findBestPath(route);
  }

  handleReset() {
    this.setState({
      calculatingRoute: '',
    });
  }

  render() {
    const { caseInfo } = this.props;
    const { calculatingRoute } = this.state;
    return (
      <div>
        <h2 className="text-with-indent">CaseThree. The cheapest delivery route between two towns.</h2>
        <Form
          caseForm
          caseAB
          onEnter={this.handleEnter}
          description={caseInfo.description}
          placeholder={caseInfo.placeholder}
        />
        <div>
          {calculatingRoute && (
            <div className={r()}>
              <div className={r('text')}>{this.calculateCheapestCost(calculatingRoute)}</div>
              <button
                className={r('reset-button')}
                onClick={this.handleReset}
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
}

CaseThree.propTypes = {
  graph: PropTypes.shape({
    edges: PropTypes.array.isRequired,
    vertexes: PropTypes.array.isRequired,
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
