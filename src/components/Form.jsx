import React from 'react';

import { block } from 'bem-cn';

const f = block('form');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let value = this.state.value;
        if(value) {
            this.props.onEnter(value);
            this.setState({ value: '' });
        }
    }

    handleChange(event) {
        let value = event.target.value.toUpperCase();
        if (this.props.caseForm) {
            value = value.replace(/[^A-Za-z]/ig, '');
        } else {
            value = value.replace(/[^A-Za-z0-9,]/ig, '');
        }
        this.setState({ value });
    }

    render() {
        return(
            <div>
                <h4 className="text-with-indent">{this.props.description}</h4>
                <form className={f()} onSubmit={this.handleSubmit}>
                    <input
                        className={f('input')}
                        type="text"
                        maxLength={this.props.caseAB ? 2 : undefined}
                        placeholder={`Type it here, ${this.props.placeholder}`}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button className={f('button')} type="submit">ENTER</button>
                </form>
            </div>
            
        );
    }
}

export default Form;