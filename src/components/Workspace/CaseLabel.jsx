import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';

const cl = block('case-label');

function CaseLabel(props) {
  const { isChecked, onChoose, caseItem: { id, name, title } } = props;
  return (
    <div className={cl()} key={id}>
      <label className={cl('info-container', { checked: isChecked })} htmlFor={id}>
        <input
          className={cl('input')}
          type="radio"
          name="currentCase"
          id={id}
          value={id}
          checked={isChecked}
          onChange={onChoose}
        />
        <div className={cl('title')}>{name}</div>
        <div className={cl('description')}>{title}</div>
      </label>
    </div>
  );
}

CaseLabel.propTypes = {
  caseItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
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

export default CaseLabel;
