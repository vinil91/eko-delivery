import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { block } from 'bem-cn';

import { Route, Form } from '..';

import { resetGraph, setGraph } from '../../redux/actions/actions';
import parser from '../../helpers/parser';
import Graph from '../../models/Graph';

import './RoutesList.css';

const wp = block('warning-panel');
const rl = block('routes-list');

function RoutesList({
  enteredLine, graph: { edges }, isWronglyParsed, onSubmit, onReset,
}) {
  const atLeastOneEdge = edges.length > 0;

  const onEnter = (value) => {
    const nodes = parser(value);
    const correctParsedNodes = nodes.filter((node) => node.start !== '*' && node.end !== '*' && node.weight !== '*');
    const isValueWronglyParsed = !(nodes.length === correctParsedNodes.length);
    const graph = new Graph(correctParsedNodes);
    onSubmit(graph, value, isValueWronglyParsed);
  };

  return (
    <div className={rl()}>
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
          <div className={rl('show-part')}>
            <div className={rl('title-line')}>
              <div className={rl('title')}>
                Available Routes List
              </div>
              <button
                className={rl('button')}
                onClick={onReset}
                type="button"
              >
                Reset Routes List
              </button>
            </div>
            <ul className={rl('container')}>
              {
                edges.map((edge) => (
                  <Route
                    key={edge.id}
                    id={edge.id}
                    start={edge.start}
                    end={edge.end}
                    cost={edge.weight}
                  />
                ))
              }
            </ul>

          </div>
        </div>
      )}
    </div>
  );
}

RoutesList.propTypes = {
  graph: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.any),
    vertexes: PropTypes.arrayOf(PropTypes.any),
  }),
  isWronglyParsed: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
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

function mapStateToProps(state) {
  return {
    graph: state.graph,
    enteredLine: state.userInput.enteredLine,
    isWronglyParsed: state.userInput.isWronglyParsed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onReset: () => dispatch(resetGraph()),
    onSubmit: (graph, enteredLine, isWronglyParsed) => dispatch(setGraph(graph, enteredLine, isWronglyParsed)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesList);
