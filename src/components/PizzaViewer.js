import React, { Component } from 'react';

class PizzaViewer extends Component {
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

function PizzaBoard() {
    return (
        <div className="pizza-board">
            <img src={require('../assets/board.svg')} alt="Pizza board" />
        </div>
    );
}

function PizzaBase() {
    return (
        <div className="pizza-base">
            <img src={require('../assets/base.svg')} alt="Pizza base" />
        </div>
    );
}

function PizzaToppings() {
    return (
        <div className="pizza-toppings">
            <img
                src={require('../assets/toppings/anchovies.svg')}
                alt="Anchovies"
            />
            <img src={require('../assets/toppings/bacons.svg')} alt="Bacons" />
            <img src={require('../assets/toppings/basils.svg')} alt="Basils" />
            <img
                src={require('../assets/toppings/chilies.svg')}
                alt="Chilies"
            />
            <img
                src={require('../assets/toppings/mozzarellas.svg')}
                alt="Mozzarellas"
            />
            <img
                src={require('../assets/toppings/mushrooms.svg')}
                alt="Mushrooms"
            />
            <img src={require('../assets/toppings/olives.svg')} alt="Olives" />
            <img src={require('../assets/toppings/onions.svg')} alt="Onions" />
            <img
                src={require('../assets/toppings/peppers.svg')}
                alt="Peppers"
            />
        </div>
    );
}

export default PizzaViewer;
