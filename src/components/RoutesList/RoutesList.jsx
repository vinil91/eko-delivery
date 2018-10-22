import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';
import Route from './Route';
import Form from '../Form';

const rl = block('routes-list');

function RoutesList(props) {
  const { onEnter, onReset, graph: { nodes } } = props;
  return (
    <div>
      <Form
        onEnter={onEnter}
        description="Enter all available routes(comma-separated, e.g. 'AB1,BF4,FE7')"
        placeholder="e.g. 'AB1,BF4,FE7'"
      />
      { nodes
                && (
                <div className={rl()}>
                  <div className={rl('description-tag')}>
                    <div>FROM:</div>
                    <div>TO:</div>
                    <div>WEIGHT:</div>
                  </div>
                  <div className={rl('title')}>
                        Available Routes List
                  </div>
                  <div className={rl('container')}>
                    {nodes.map(node => (
                      <Route
                        key={node.id}
                        id={node.id}
                        start={node.start}
                        end={node.end}
                        cost={node.weight}
                      />
                    ))
                        }
                  </div>
                  <button
                    className={rl('reset-button')}
                    onClick={onReset}
                  >
                        Reset Routes List
                  </button>
                </div>
                )
            }
    </div>
  );
}

export default RoutesList;
