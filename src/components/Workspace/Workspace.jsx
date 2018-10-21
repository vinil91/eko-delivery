import React from 'react';
import PropTypes from 'prop-types';

import {CaseOne, CaseTwo, CaseThree} from './Cases';

import { block } from 'bem-cn';

const cl = block('case-label');

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
                        <div className="case-label-container">
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
                                    <div className={cl()} key={caseItem.id}>
                                        <input
                                            className={cl('input')}
                                            type="radio"
                                            name="currentCase"
                                            id={caseItem.id}
                                            value={caseItem.id}
                                            checked={this.props.currentCase === caseItem.id}
                                            onChange={this.props.onCaseChoose}
                                        />
                                        <label className={cl('info-container')} htmlFor={caseItem.id}>
                                            <div className={cl('title')}>{caseItem.title}</div>
                                            <div className={cl('description')}>{caseItem.description}</div>
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