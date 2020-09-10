import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';

const f = block('form');

function Form({ description, caseAB, caseForm, placeholder, onEnter }) {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      onEnter(value);
      setValue('');
    }
  }

  const handleChange = (event) => {
    let curValue = event.target.value.toUpperCase();
    if (caseForm) {
      curValue = curValue.replace(/[^A-Za-z]/ig, '');
    } else {
      curValue = curValue.replace(/[^A-Za-z0-9,]/ig, '');
    }
    setValue(curValue);
  }

  return (
    <div>
      <h4 className="text-with-indent">{description}</h4>
      <form
        className={f()}
        onSubmit={handleSubmit}
      >
        <input
          className={f('input')}
          type="text"
          maxLength={caseAB ? 2 : undefined}
          placeholder={`Type it here, ${placeholder}`}
          value={value}
          onChange={handleChange}
        />
        <button
          className={f('button')}
          type="submit"
        >
          ENTER
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  onEnter: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  caseForm: PropTypes.bool,
  caseAB: PropTypes.bool,
  placeholder: PropTypes.string,
};

Form.defaultProps = {
  caseForm: false,
  caseAB: false,
  placeholder: '',
};

export default Form;
