import React from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';

import { Stats } from '..';

import './Header.css';

const b = block('header');

function Header({ title }) {
  return (
    <div className={b()}>
      <Stats />
      <h1 className={b('title')}>{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
