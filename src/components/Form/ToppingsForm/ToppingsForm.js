import React, { Component } from 'react';
import ToppingButton from './ToppingButton';

class ToppingsForm extends Component {
    render() {
        return (
            <div>
                <h2>Choose your toppings</h2>
                <div className="toppings-container">
                    {this.props.toppings.map((topping) => {
                        return (
                            <ToppingButton
                                key={topping.toppingName}
                                topping={topping}
                                selectedToppings={this.props.selectedToppings}
                                onToppingBtnClick={this.props.onToppingBtnClick}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ToppingsForm;
