import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { RoutesList, Workspace } from '..';

function Content({ graph }) {
  const atLeastOneEdge = graph.edges.length > 0;
  return (
    <div className="content">
      <RoutesList />
      {atLeastOneEdge > 0 && <Workspace />}
    </div>
  );
}

Content.propTypes = {
  graph: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.any).isRequired,
    vertexes: PropTypes.arrayOf(PropTypes.any).isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    graph: state.graph,
  };
}

export default connect(mapStateToProps)(Content);
