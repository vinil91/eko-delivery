import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';

const cl = block('case-label');

function CaseLabel(props) {
  return (
    <div className={cl()} key={props.caseItem.id}>
      <label className={cl('info-container', { checked: props.isChecked })} htmlFor={props.caseItem.id}>
        <input
          className={cl('input')}
          type="radio"
          name="currentCase"
          id={props.caseItem.id}
          value={props.caseItem.id}
          checked={props.isChecked}
          onChange={props.onChoose}
        />
        <div className={cl('title')}>{props.caseItem.title}</div>
        <div className={cl('description')}>{props.caseItem.description}</div>
      </label>
    </div>
  );
}

export default CaseLabel;
