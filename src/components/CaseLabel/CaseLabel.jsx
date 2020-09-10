import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { block } from 'bem-cn';

import { setCase } from '../../redux/actions/actions';

import './CaseLabel.css';

const cl = block('case-label');

function CaseLabel({ isChecked, onChoose, caseItem: { id, name, title } }) {
  const handleCaseChoose = (event) => {
    const currentCase = event.target.value;
    onChoose(currentCase);
  }

  return (
    <li className={cl()} key={id}>
      <label className={cl('info-container', { checked: isChecked })} htmlFor={id}>
        <input
          className={cl('input')}
          type="radio"
          name="currentCase"
          id={id}
          value={id}
          checked={isChecked}
          onChange={handleCaseChoose}
        />
        <div className={cl('title')}>{name}</div>
        <div className={cl('description')}>{title}</div>
      </label>
    </li>
  );
}

CaseLabel.propTypes = {
  caseItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
  }),
  isChecked: PropTypes.bool,
  onChoose: PropTypes.func.isRequired,
};

CaseLabel.defaultProps = {
  caseItem: {
    title: '',
    description: '',
  },
  isChecked: false,
};

function mapStateToProps(state) {
  return {
    graph: state.graph,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChoose: (currentCase) => dispatch(setCase(currentCase)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaseLabel);

