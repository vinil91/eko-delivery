import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';
import Form from '../../Form';

const r = block('result');

class CaseOne extends React.Component {
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

  calculateCost(route) {
    const { graph } = this.props;
    return graph.countPathWeight(route);
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
        <h2 className="text-with-indent">CaseOne. The delivery cost of route.</h2>
        <Form
          caseForm
          onEnter={this.handleEnter}
          description={caseInfo.description}
          placeholder={caseInfo.placeholder}
        />
        <div>
          {calculatingRoute && (
            <div className={r()}>
              <div className={r('text')}>{this.calculateCost(calculatingRoute)}</div>
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
