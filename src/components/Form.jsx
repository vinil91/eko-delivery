import React from 'react';

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
                <h4>{this.props.description}</h4>
                <form className="enter-routes-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        maxLength={this.props.caseAB ? 2 : undefined}
                        placeholder={`Type it here, ${this.props.placeholder}`}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button type="submit">ENTER</button>
                </form>
            </div>
            
        );
    }
}

export default Form;