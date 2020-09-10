import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';

import './Form.css';

const f = block('form');

function FormWithStops({ description, onEnter, placeholder }) {
  const [route, setRoute] = useState('');
  const [stops, setStops] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (route && stops) {
      onEnter(route, stops);
      setRoute('');
      setStops('');
    }
  }

  const handleChange = (event) => {
    let curRoute = event.target.value.toUpperCase();
    curRoute = curRoute.replace(/[^A-Za-z]/ig, '');
    setRoute(curRoute)
  }

  const handleStopsChange = (event) => {
    let curStops = event.target.value;
    curStops = curStops.replace(/[^0-9]/ig, '');
    setStops(curStops);
  }

  return (
    <div>
      <h4 className="text-with-indent">{description}</h4>
      <form className={f()} onSubmit={handleSubmit}>
        <input
          type="text"
          size="3"
          placeholder="stops"
          value={stops}
          onChange={handleStopsChange}
        />
        <input
          className={f('input', 'case2')}
          type="text"
          maxLength={2}
          placeholder={`Type route here, ${placeholder}`}
          value={route}
          onChange={handleChange}
        />
        <button className={f('button')} type="submit">ENTER</button>
      </form>
    </div>
  );
}

FormWithStops.propTypes = {
  onEnter: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

FormWithStops.defaultProps = {
  placeholder: '',
};

export default FormWithStops;
