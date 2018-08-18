import React, { Component } from 'react';
import Previewer from './Previewer/Previewer';
import Form from './Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzaPrice: 9.99,
            selectedToppings: [],
            details: [
                'name',
                'email',
                'confirm email',
                'address',
                'postcode',
                'contact number'
            ],
            toppings: [
                {
                    toppingName: 'Anchovy',
                    labelImage: '/assets/toppings/anchovy.svg',
                    contentImage: '/assets/toppings/anchovies.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Bacon',
                    labelImage: '/assets/toppings/bacon.svg',
                    contentImage: '/assets/toppings/bacons.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Basil',
                    labelImage: '/assets/toppings/basil.svg',
                    contentImage: '/assets/toppings/basils.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Chili',
                    labelImage: '/assets/toppings/chili.svg',
                    contentImage: '/assets/toppings/chilies.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Mozzarella',
                    labelImage: '/assets/toppings/mozzarella.svg',
                    contentImage: '/assets/toppings/mozzarellas.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Mushroom',
                    labelImage: '/assets/toppings/mushroom.svg',
                    contentImage: '/assets/toppings/mushrooms.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Olive',
                    labelImage: '/assets/toppings/olive.svg',
                    contentImage: '/assets/toppings/olives.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Onion',
                    labelImage: '/assets/toppings/onion.svg',
                    contentImage: '/assets/toppings/onions.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Pepper',
                    labelImage: '/assets/toppings/pepper.svg',
                    contentImage: '/assets/toppings/peppers.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Pepperoni',
                    labelImage: '/assets/toppings/pepperoni.svg',
                    contentImage: '/assets/toppings/pepperoni.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Peppers',
                    labelImage: '/assets/toppings/peppers.svg',
                    contentImage: '/assets/toppings/peppers.svg',
                    price: 0.99
                },
                {
                    toppingName: 'Sweetcorn',
                    labelImage: '/assets/toppings/sweetcorn.svg',
                    contentImage: '/assets/toppings/sweetcorn.svg',
                    price: 0.99
                }
            ]
        };
        this.onToppingBtnClick = this.onToppingBtnClick.bind(this);
    }

    onToppingBtnClick(topping) {
        const selectedToppings = [...this.state.selectedToppings];
        if (selectedToppings.includes(topping)) {
            selectedToppings.splice(selectedToppings.indexOf(topping), 1);
        } else {
            selectedToppings.push(topping);
        }
        this.setState({ selectedToppings });
    }

    render() {
        return (
            <div className="pizza-creator-app">
                <h1>Pizza Creator</h1>
                <Previewer />
                <Form
                    details={this.state.details}
                    toppings={this.state.toppings}
                    selectedToppings={this.state.selectedToppings}
                    onToppingBtnClick={this.onToppingBtnClick}
                    pizzaPrice={this.state.pizzaPrice}
                />
            </div>
        );
    }
}
export default App;
