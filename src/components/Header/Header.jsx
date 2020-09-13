import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';
import { connect } from 'react-redux';

import { Stats, TaskDescription } from '..';

import { asyncSetInfo } from '../../redux/actions/actions';

import './Header.css';

const b = block('header');

function Header({
  title, city, temperature, rate, setInfo,
}) {
  const [isShowingPdf, setShowingPdf] = useState(false);

  useEffect(() => {
    setInfo();
  }, [setInfo]);

  return (
    <div className={b()}>
      <Stats />
      <div className={b('title-panel')}>
        <div className={`${b('info')} ${b('info-rate')}`}>
          <div className={b('info-rate-first-line')}>USD/RUB</div>
          <div>{rate}</div>
        </div>
        <h1 className={b('title')}>{title}</h1>
        <div className={`${b('info')} ${b('info-weather')}`}>
          <div>{city}</div>
          <div>
            {temperature}
            °C
          </div>
        </div>
      </div>
      <div className={b('button-container')}>
        <button
          className={b('button')}
          onClick={() => { setShowingPdf(true); }}
          type="button"
        >
          What is this service for?
        </button>
      </div>
      <TaskDescription isShowingPdf={isShowingPdf} onClose={() => { setShowingPdf(false); }} />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  rate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  city: PropTypes.string.isRequired,
  temperature: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  setInfo: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    rate: state.info.rate,
    city: state.info.city,
    temperature: state.info.temperature,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setInfo: () => dispatch(asyncSetInfo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
