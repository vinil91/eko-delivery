import React from 'react';
import PropTypes from 'prop-types';

import Route from './Route';
import Form from './Form';

function RoutesList(props) {
    return (
        <div>
            <Form 
                onEnter={props.onEnter} 
                description="Enter all available routes(comma-separated, e.g. 'AB1,BF4,FE7')"
                placeholder="e.g. 'AB1,BF4,FE7'"
            />
            { props.graph.nodes &&
                <div className="routes-list">
                    <div className="routes-list-description-tag">
                        <div>FROM:</div>
                        <div>TO:</div>
                        <div>WEIGHT:</div>
                    </div>
                    <div className="routes-list-title">
                        Available Routes List
                    </div>
                    <div className="routes-list-container">
                        {props.graph.nodes.map(node => 
                            <Route
                                key={node.id}
                                id={node.id}
                                start={node.start}
                                end={node.end}
                                cost={node.weight}
                            />)
                        }
                    </div>
                    <button 
                        className="routes-list-reset-button" 
                        onClick={props.onReset}
                    >
                        Reset Routes List
                    </button>
                </div>
            }
        </div>  
    );
}

export default RoutesList;