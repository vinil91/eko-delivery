import React from 'react';
import PropTypes from 'prop-types';

import { Header, RoutesList } from './components';
import Workspace from './components/Workspace/Workspace';

function App({ title }) {
  return (
    <div className="main">
      <Header title={title} />
      <RoutesList />
      <Workspace />
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
