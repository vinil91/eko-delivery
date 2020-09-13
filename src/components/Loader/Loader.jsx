import React, { useRef } from 'react';
import lottie from 'lottie-web';
import { block } from 'bem-cn';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import trainAnimation from './train-animation.json';

import './Loader.css';

const l = block('loader');

function Loader({ isInfoLoading }) {
  const element = useRef(null);
  const isAppLoading = isInfoLoading;

  const mountAnimation = () => {
    if (element && element.current) {
      lottie.loadAnimation({
        container: element.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: trainAnimation,
      });
    }
  };

  return (
    <CSSTransition
      in={isAppLoading}
      timeout={200}
      classNames={l()}
      onEnter={mountAnimation}
      unmountOnExit
    >
      <div className={l('backdrop')}>
        <div className={l('animation')} ref={element} />
      </div>
    </CSSTransition>
  );
}

Loader.propTypes = {
  isInfoLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isInfoLoading: state.info.isInfoLoading,
  };
}

export default connect(mapStateToProps)(Loader);
