import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';
import FormWithStops from './FormWithStops';

const r = block('result');

class CaseTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculatingRoute: '',
      calculatingStops: '',
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleEnter(route, calculatingStops) {
    const calculatingRoute = route.toUpperCase();
    this.setState({ calculatingRoute, calculatingStops });
  }

  calculateDeliveryAmount(route, stops) {
    const { graph } = this.props;
    return graph.countTripsWithLessThanNStops(route, Number(stops));
  }

  handleReset() {
    this.setState({
      calculatingRoute: '',
      calculatingStops: '',
    });
  }

  render() {
    const { caseInfo } = this.props;
    const { calculatingRoute, calculatingStops } = this.state;
    return (
      <div>
        <h2 className="text-with-indent">CaseTwo. The number of possible delivery route that can be construct by the given conditions.</h2>
        <FormWithStops
          onEnter={this.handleEnter}
          description={caseInfo.description}
          placeholder={caseInfo.placeholder}
        />
        <div>
          {calculatingRoute && calculatingStops && (
            <div className={r()}>
              <div className={r('text')}>
                {this.calculateDeliveryAmount(calculatingRoute, calculatingStops)}
              </div>
              <button
                className={r('reset-button')}
                onClick={this.handleReset}
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
