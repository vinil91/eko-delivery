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
    return graph.weightOfPathFromString(route);
  }

  handleReset() {
    this.setState({
      calculatingRoute: '',
    });
  }

  render() {
    const { calculatingRoute } = this.state;
    return (
      <div>
        <h2 className="text-with-indent">CaseOne. The delivery cost of route.</h2>
        <Form
          caseForm
          onEnter={this.handleEnter}
          description="Enter the route to calcualte the cost of delivery. Only latin letters allowed (e.g. 'ABC', 'ADEF')"
          placeholder="e.g. 'ABC', 'ADEF'"
        />
        <div>
          {calculatingRoute
                    && (
                    <div className={r()}>
                      <div className={r('text')}>{this.calculateCost(calculatingRoute)}</div>
                      <button className={r('reset-button')} onClick={this.handleReset} type="button">RESET THE LAST COUNTED ROUTE</button>
                    </div>
                    )
                    }
        </div>
      </div>
    );
  }
}


export default CaseOne;
