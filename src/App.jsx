import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header/Header';
import RoutesList from './components/RoutesList/RoutesList';
import Workspace from './components/Workspace/Workspace';


import { parser } from './helpers/parser'
import { Graph } from './models/Graph'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.graph = {};
        this.state = {
            cases: this.props.initialData,
            currentCase: ''
        }

        this.handleRoutesEnter = this.handleRoutesEnter.bind(this);
        this.handleRoutesReset = this.handleRoutesReset.bind(this);
        this.handleCaseChoose = this.handleCaseChoose.bind(this);
    }

    handleCaseChoose(event) {
        const currentCase = event.target.value;
        this.setState({
            currentCase
          });
    }

    handleRoutesEnter(line) {
        const nodes = parser(line);
        this.graph = new Graph(nodes);
        this.setState({
            currentCase: ''
        });
    }

    handleRoutesReset() {
        this.graph = {};
        this.forceUpdate();
    }
    
    render() {
        return (
            <div className="main">
                <Header
                    graph={this.graph}
                    title={this.props.title}
                />

                <RoutesList
                    graph={this.graph}  
                    onEnter={this.handleRoutesEnter}
                    onReset={this.handleRoutesReset}
                />

                <Workspace
                    graph={this.graph}
                    onCaseChoose = {this.handleCaseChoose}
                    currentCase = {this.state.currentCase}
                />
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(PropTypes.object).isRequired
};

App.defaultProps = {
    title: "Title is required"
};

export default App;