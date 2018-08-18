import React from 'react';

export default function TotalPrice(props) {
    return (
        <p className="total-price">
            {'Total: $' +
                getPizzaPrice(
                    props.selectedToppings,
                    props.pizzaPrice
                ).toString()}
        </p>
    );
}

function getPizzaPrice(selectedToppings, pizzaPrice) {
    let price = pizzaPrice;
    selectedToppings.forEach(selectedTopping => {
        price += selectedTopping.price;
    });
    return price.toFixed(2);
}
