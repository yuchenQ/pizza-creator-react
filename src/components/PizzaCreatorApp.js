import React, { Component } from 'react';
import PizzaViewer from './PizzaViewer';
import Form from './Form';

const toppings = [
    {
        name: 'Anchovy',
        labelImage: './assets/toppings/anchovy.svg',
        contentImage: './assets/toppings/anchovies.svg'
    },
    {
        name: 'Bacon',
        labelImage: './assets/toppings/bacon.svg',
        contentImage: './assets/toppings/bacons.svg'
    },
    {
        name: 'Basil',
        labelImage: './assets/toppings/basil.svg',
        contentImage: './assets/toppings/basils.svg'
    },
    {
        name: 'Chili',
        labelImage: './assets/toppings/chili.svg',
        contentImage: './assets/toppings/chilies.svg'
    },
    {
        name: 'Mozzarella',
        labelImage: './assets/toppings/mozzarella.svg',
        contentImage: './assets/toppings/mozzarellas.svg'
    },
    {
        name: 'Mushroom',
        labelImage: './assets/toppings/mushroom.svg',
        contentImage: './assets/toppings/mushrooms.svg'
    },
    {
        name: 'Olive',
        labelImage: './assets/toppings/olive.svg',
        contentImage: './assets/toppings/olives.svg'
    },
    {
        name: 'Onion',
        labelImage: './assets/toppings/onion.svg',
        contentImage: './assets/toppings/onions.svg'
    },
    {
        name: 'Pepper',
        labelImage: './assets/toppings/pepper.svg',
        contentImage: './assets/toppings/peppers.svg'
    },
    {
        name: 'Pepperoni',
        labelImage: './assets/toppings/pepperoni.svg',
        contentImage: './assets/toppings/pepperoni.svg'
    },
    {
        name: 'Peppers',
        labelImage: './assets/toppings/peppers.svg',
        contentImage: './assets/toppings/peppers.svg'
    },
    {
        name: 'Sweetcorn',
        labelImage: './assets/toppings/sweetcorn.svg',
        contentImage: './assets/toppings/sweetcorn.svg'
    }
];
const details = [
    'name',
    'email',
    'confirm email',
    'address',
    'postcode',
    'contact number'
];

class PizzaCreatorApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTopping: []
        };
    }

    render() {
        return (
            <div className="pizza-creator-app">
                <h1>Pizza Creator</h1>
                <PizzaViewer />
                <Form toppings={toppings} details={details} />
            </div>
        );
    }
}
export default PizzaCreatorApp;
