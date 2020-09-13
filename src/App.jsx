import React from 'react';
import PropTypes from 'prop-types';

import {
  Header, Content, Footer, Loader,
} from './components';

import './index.css';

function App({ title }) {
  return (
    <div className="main">
      <Loader />
      <Header title={title} />
      <Content />
      <Footer />
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
