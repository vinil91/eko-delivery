import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';

const f = block('form');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    const { onEnter } = this.props;
    if (value) {
      onEnter(value);
      this.setState({ value: '' });
    }
  }

  handleChange(event) {
    const { caseForm } = this.props;
    let value = event.target.value.toUpperCase();
    if (caseForm) {
      value = value.replace(/[^A-Za-z]/ig, '');
    } else {
      value = value.replace(/[^A-Za-z0-9,]/ig, '');
    }
    this.setState({ value });
  }

  render() {
    const { description, caseAB, placeholder } = this.props;
    const { value } = this.state;
    return (
      <div>
        <h4 className="text-with-indent">{description}</h4>
        <form
          className={f()}
          onSubmit={this.handleSubmit}
        >
          <input
            className={f('input')}
            type="text"
            maxLength={caseAB ? 2 : undefined}
            placeholder={`Type it here, ${placeholder}`}
            value={value}
            onChange={this.handleChange}
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
