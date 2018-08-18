import React, { Component } from 'react';
import PizzaBase from './PizzaBase';
import PizzaBoard from './PizzaBoard';
import PizzaToppings from './PizzaToppings';

class Previewer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="pizza-viewer">
                <div className="pizza">
                    <PizzaBoard />
                    <PizzaBase />
                    <PizzaToppings />
                </div>
            </div>
        );
    }
}

export default Previewer;