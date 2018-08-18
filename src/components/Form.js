import React, { Component } from 'react';
import DetailsContainer from './DetailsContainer';
import ToppingsContainer from './ToppingsContainer';
import Summary from './Summary';

class Form extends Component {
    render() {
        return (
            <form className="form">
                <DetailsContainer details={this.props.details} />
                <ToppingsContainer toppings={this.props.toppings} />
                <Summary />
            </form>
        );
    }
}

export default Form;
