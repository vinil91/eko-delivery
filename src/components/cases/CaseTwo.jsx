import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form';

class CaseTwo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calculatingRoute: '',
            stops: '1',
            chkbox: false
        };

        this.handleEnter = this.handleEnter.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleChangeChk = this.handleReset.bind(this);
        this.handleStopsChange = this.handleStopsChange.bind(this);
    }
    
    handleEnter(route) {
        const calculatingRoute = route.toUpperCase();
        this.setState({calculatingRoute});
    }

    calculateDeliveryAmount(route, stops) {
        return this.props.graph.countTripsWithLessThanNStops(route, Number(stops));
    }

    handleReset() {
        this.setState({
            calculatingRoute: '',
            stops: ''

        });
    }

    handleChangeChk() {
        this.setState({
            chkbox: !this.state.chkbox
        });
    }

    handleStopsChange(event) {
        let stops = event.target.value;
        stops = stops.replace(/[^0-9]/ig, '');
        this.setState({
            stops
        });
    }

    render() {
        return (
            <div>
                <h2>CaseTwo. The number of possible delivery route that can be construct by the given
                    conditions.</h2>
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
                    <input type="text" size="2"  value={this.state.stops} onChange={this.handleStopsChange}/>
                </div>
                <div>
                    {this.state.calculatingRoute &&
                    <div>
                        <div className="result">{`The number of possible delivery of route ${this.state.calculatingRoute} ${this.state.stops ? `with a maximum of ${this.state.stops} stops` : ''} is ${this.calculateDeliveryAmount(this.state.calculatingRoute, this.state.stops)}`}</div>
                        <button className="reset-case-button" onClick={this.handleReset}>RESET THE LAST COUNTED ROUTE AND STOPS AMOUNT</button>
                    </div>
                    }
                </div>
            </div>
        );
    }
}


export default CaseTwo;