import React from 'react';
import { block } from 'bem-cn';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import taskPdf from './task.pdf';

import './TaskDescription.css';

const l = block('task-description');

function TaskDescription({ isShowingPdf, onClose }) {
  return (
    <CSSTransition
      in={isShowingPdf}
      timeout={200}
      classNames={l()}
      unmountOnExit
    >
      <div className={l('backdrop')}>
        <button
          className={l('button')}
          onClick={onClose}
          type="button"
        >
          Got it!
        </button>
        <iframe src={taskPdf} title="_blank" width="100%" height="100%" />
      </div>
    </CSSTransition>
  );
}

TaskDescription.propTypes = {
  isShowingPdf: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TaskDescription;
