import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';
import Route from './Route';
import Form from '../Form';

const wp = block('warning-panel');
const rl = block('routes-list');

function RoutesList(props) {
  const {
    enteredLine, onEnter, onReset, graph: { edges }, isWronglyParsed,
  } = props;
  const atLeastOneEdge = edges.length > 0;
  return (
    <div>
      <Form
        onEnter={onEnter}
        description="Enter all available routes(comma-separated, e.g. 'AB1,BF4,FE7')"
        placeholder="e.g. 'AB1,BF4,FE7'"
      />
      {isWronglyParsed && (
        <div className={wp()}>
          <div className={wp('header')}>
            Some entered routes were parsed not correct. Please, check correctness of your input.
          </div>
          {atLeastOneEdge && (
            <div className={wp('advice')}>
              Successfully processed routes are available for further work. Have a good Journey!
            </div>
          )}
          <div className={wp('line')}>
            {enteredLine}
          </div>
        </div>
      )}
      {atLeastOneEdge && (
        <div>
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
              {edges.map(edge => (
                <Route
                  key={edge.id}
                  id={edge.id}
                  start={edge.start}
                  end={edge.end}
                  cost={edge.weight}
                />
              ))
              }
            </div>
            <button
              className={rl('reset-button')}
              onClick={onReset}
              type="button"
            >
              Reset Routes List
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

RoutesList.propTypes = {
  graph: PropTypes.shape({
    edges: PropTypes.array,
    vertexes: PropTypes.array,
  }),
  isWronglyParsed: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  enteredLine: PropTypes.string,
};

RoutesList.defaultProps = {
  graph: {
    edges: [],
    vertexes: [],
  },
  enteredLine: '',
};


export default RoutesList;
