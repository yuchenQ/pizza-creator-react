import React, { Component } from 'react';
import Details from './Details/Details';
import ToppingsForm from './ToppingsForm/ToppingsForm';
import Summary from './Summary/Summary';

class Form extends Component {
    render() {
        return (
            <form className="form">
                <Details details={this.props.details} />
                <ToppingsForm
                    toppings={this.props.toppings}
                    selectedToppings={this.props.selectedToppings}
                    onToppingBtnClick={this.props.onToppingBtnClick}
                />
                <Summary
                    selectedToppings={this.props.selectedToppings}
                    pizzaPrice={this.props.pizzaPrice}
                />
            </form>
        );
    }
}

export default Form;
