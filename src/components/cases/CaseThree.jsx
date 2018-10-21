import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form';

class CaseThree extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calculatingRoute: ''
        };

        this.handleEnter = this.handleEnter.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    
    handleEnter(route) {
        const calculatingRoute = route.toUpperCase();
        this.setState({calculatingRoute});
    }

    calculateCheapestCost(route) {
        return this.props.graph.findBestPath(route);
    }

    handleReset() {
        this.setState({
            calculatingRoute: ''
        });
    }

    render() {
        return (
            <div>
                <h2>CaseThree. The cheapest delivery route between two towns.</h2>
                <Form
                    caseForm
                    caseAB
                    onEnter={this.handleEnter}
                    description="Enter the first and the end points of route. Only latin letters allowed (e.g. 'AB', 'EF')"
                    placeholder="e.g. 'AB', 'EF'"
                />
                <div>
                    {this.state.calculatingRoute &&
                    <div>
                        <div className="result">{`The cost of cheapest delivery on the route ${this.state.calculatingRoute} is ${this.calculateCheapestCost(this.state.calculatingRoute)} dollars`}</div>
                        <button className="reset-case-button" onClick={this.handleReset}>RESET THE LAST COUNTED ROUTE</button>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default CaseThree;