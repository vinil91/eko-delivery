import React from 'react';
import PropTypes from 'prop-types';

import { block } from 'bem-cn';

const f = block('form');

class FormWithStops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      stops: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStopsChange = this.handleStopsChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { route, stops } = this.state;
    const { onEnter } = this.props;
    if (route && stops) {
      onEnter(route, stops);
      this.setState({ route: '', stops: '' });
    }
  }

  handleChange(event) {
    let route = event.target.value.toUpperCase();
    route = route.replace(/[^A-Za-z]/ig, '');
    this.setState({ route });
  }

  handleStopsChange(event) {
    let stops = event.target.value;
    stops = stops.replace(/[^0-9]/ig, '');
    this.setState({
      stops,
    });
  }

  render() {
    const { description, placeholder } = this.props;
    const { route, stops } = this.state;
    return (
      <div>
        <h4 className="text-with-indent">{description}</h4>
        <form className={f()} onSubmit={this.handleSubmit}>
          <input
            type="text"
            size="3"
            placeholder="stops"
            value={stops}
            onChange={this.handleStopsChange}
          />
          <input
            className={f('input', 'case2')}
            type="text"
            maxLength={2}
            placeholder={`Type route here, ${placeholder}`}
            value={route}
            onChange={this.handleChange}
          />
          <button className={f('button')} type="submit">ENTER</button>
        </form>
      </div>

    );
  }
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
