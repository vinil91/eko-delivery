import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
    let routes =  props.graph.nodes ? props.graph.nodes.length : 0;
    let cities = props.graph.vertexes ? props.graph.vertexes.length : 0;

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th>ROUTES AVAILABLE:</th>
                    <td>{routes}</td>
                </tr>
                <tr>
                    <th>CITIES COVERED:</th>
                    <td>{cities}</td>
                </tr>
            </tbody>
        </table>
);
}

Stats.propTypes = {
    graph: PropTypes.object
};

Stats.defaultProps = {
    graph: {},
};

export default Stats;