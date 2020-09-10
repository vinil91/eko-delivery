import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { block } from 'bem-cn';

import Route from './Route';
import Form from '../Form';

import { resetGraph, setGraph } from '../../redux/actions/actions';
import parser from '../../helpers/parser';
import Graph from '../../models/Graph';

const wp = block('warning-panel');
const rl = block('routes-list');

function RoutesList({ enteredLine, graph: { edges }, isWronglyParsed, onSubmit, onReset }) {
  const atLeastOneEdge = edges.length > 0;

  const onEnter = (value) => {
    const nodes = parser(value);
    const correctParsedNodes = nodes.filter((node) => node.start !== '*' && node.end !== '*' && node.weight !== '*');
    const isWronglyParsed = !(nodes.length === correctParsedNodes.length);
    const graph = new Graph(correctParsedNodes);
    onSubmit(graph, value, isWronglyParsed);
  };

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
    edges: PropTypes.arrayOf(PropTypes.any),
    vertexes: PropTypes.arrayOf(PropTypes.any),
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
  isWronglyParsed: false,
};

function mapStateToProps(state) {
  return {
    graph: state.graph,
    enteredLine: state.userInput.enteredLine,
    isWronglyParsed: state.userInput.isWronglyParsed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onReset: () => dispatch(resetGraph()),
    onSubmit: (graph, enteredLine, isWronglyParsed) => dispatch(setGraph(graph, enteredLine, isWronglyParsed)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesList);
