import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header/Header';
import RoutesList from './components/RoutesList/RoutesList';
import Workspace from './components/Workspace/Workspace';

import parser from './helpers/parser';
import Graph from './models/Graph';

class App extends React.Component {
  constructor(props) {
    super(props);
    const graph = new Graph([]);
    this.state = {
      enteredLine: '',
      currentCase: '',
      graph,
      isWronglyParsed: false,
    };

    this.handleRoutesEnter = this.handleRoutesEnter.bind(this);
    this.handleRoutesReset = this.handleRoutesReset.bind(this);
    this.handleCaseChoose = this.handleCaseChoose.bind(this);
  }

  handleCaseChoose(event) {
    const currentCase = event.target.value;
    this.setState({
      currentCase,
    });
  }

  handleRoutesEnter(line) {
    const nodes = parser(line);
    const correctParsedNodes = nodes.filter(node => node.start !== '*' && node.end !== '*' && node.weight !== '*');
    const graph = new Graph(correctParsedNodes);
    const isWronglyParsed = !(nodes.length === correctParsedNodes.length);
    this.setState({
      enteredLine: line,
      currentCase: '',
      graph,
      isWronglyParsed,
    });
  }

  handleRoutesReset() {
    const graph = new Graph([]);
    this.setState({
      enteredLine: '',
      currentCase: '',
      isWronglyParsed: false,
      graph,
    });
  }

  render() {
    const { title } = this.props;
    const {
      currentCase, graph, enteredLine, isWronglyParsed,
    } = this.state;
    return (
      <div className="main">
        <Header
          graph={graph}
          title={title}
        />

        <RoutesList
          graph={graph}
          enteredLine={enteredLine}
          isWronglyParsed={isWronglyParsed}
          onEnter={this.handleRoutesEnter}
          onReset={this.handleRoutesReset}
        />

        <Workspace
          graph={graph}
          onCaseChoose={this.handleCaseChoose}
          currentCase={currentCase}
        />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
