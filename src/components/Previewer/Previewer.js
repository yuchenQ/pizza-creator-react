import React, { Component } from 'react';
import PizzaBase from './PizzaBase';
import PizzaBoard from './PizzaBoard';
import PizzaToppings from './PizzaToppings';

class Previewer extends Component {
    render() {
        return (
            <div className="pizza-viewer">
                <div className="pizza">
                    <PizzaBoard />
                    <PizzaBase />
                    <PizzaToppings
                        selectedToppings={this.props.selectedToppings}
                    />
                </div>
            </div>
        );
    }
}

export default Previewer;
