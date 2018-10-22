import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';
import Form from '../../Form';


const r = block('result');

class CaseTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculatingRoute: '',
      stops: '1',
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStopsChange = this.handleStopsChange.bind(this);
  }

  handleEnter(route) {
    const calculatingRoute = route.toUpperCase();
    this.setState({ calculatingRoute });
  }

  calculateDeliveryAmount(route, stops) {
    const { graph } = this.props;
    return graph.countTripsWithLessThanNStops(route, Number(stops));
  }

  handleReset() {
    this.setState({
      calculatingRoute: '',
      stops: '',
    });
  }

  handleStopsChange(event) {
    let stops = event.target.value;
    stops = stops.replace(/[^0-9]/ig, '');
    this.setState({
      stops,
    });
  }

  render() {
    const { calculatingRoute, stops } = this.state;
    return (
      <div>
        <h2 className="text-with-indent">
CaseTwo. The number of possible delivery route that can be construct by the given
                    conditions.
        </h2>
        <Form
          caseForm
          caseAB
          onEnter={this.handleEnter}
          description="Enter the first, the end points of route(only latin letters allowed, e.g. 'AB', 'EF') and maximum amount
                    of stops(only numbers allowed, e.g. '5', '17'). If it is no need in amount of stops, left the field empty."
          placeholder="e.g. 'AB', 'EF'"
        />
        <div className="flex-form">
          <h4>Amount of maximum stops</h4>
          <input type="text" size="2" value={stops} onChange={this.handleStopsChange} />
        </div>
        <div>
          {calculatingRoute
                    && (
                    <div className={r()}>
                      <div className={r('text')}>{`The number of possible delivery of route ${calculatingRoute} ${stops ? `with a maximum of ${stops} stops` : ''} is ${this.calculateDeliveryAmount(calculatingRoute, stops)}`}</div>
                      <button className={r('reset-button')} onClick={this.handleReset} type="button">RESET THE LAST COUNTED ROUTE AND STOPS AMOUNT</button>
                    </div>
                    )
                    }
        </div>
      </div>
    );
  }
}


export default CaseTwo;
