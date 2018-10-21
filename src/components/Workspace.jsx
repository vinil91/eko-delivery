import React from 'react';
import PropTypes from 'prop-types';

import CaseOne from './cases/CaseOne';
import CaseTwo from './cases/CaseTwo';
import CaseThree from './cases/CaseThree';

class Workspace extends React.Component {
    constructor() {
        super();
        this.renderCurrentCase = this.renderCurrentCase.bind(this);
    }

    renderCurrentCase(currentCase) {
        switch(currentCase) {
            case 'case1': return <CaseOne graph={this.props.graph}/>;
            case 'case2': return <CaseTwo graph={this.props.graph}/>;
            case 'case3': return <CaseThree graph={this.props.graph}/>;
            default: return <div></div>
        }
    }

    render() { 
        return (
            <div>
                {this.props.graph.nodes && 
                    <div>
                        <div className="case-container">
                            {
                                [
                                    {
                                        id: 'case1',
                                        title: 'CaseOne',
                                        description: 'The delivery cost of route.'
                                    },
                                    {
                                        id: 'case2',
                                        title: 'CaseTwo',
                                        description: 'The number of possible delivery route.'
                                    },
                                    {
                                        id: 'case3',
                                        title: 'CaseThree',
                                        description: 'The cheapest delivery route between two towns.'
                                    },
                                ].map(caseItem => (
                                    <div className="case-label" key={caseItem.id}>
                                        <input
                                            type="radio"
                                            name="currentCase"
                                            id={caseItem.id}
                                            value={caseItem.id}
                                            checked={this.props.currentCase === caseItem.id}
                                            onChange={this.props.onCaseChoose}
                                        />
                                        <label className="case-label-info" htmlFor={caseItem.id}>
                                            <div className="case-label-info-title">{caseItem.title}</div>
                                            <div className="case-label-info-description">{caseItem.description}</div>
                                        </label>
                                    </div>))
                            }
                        </div>
                        {this.renderCurrentCase(this.props.currentCase)}
                    </div>
                }
            </div>
        );
    }
}

export default Workspace;