import React from 'react';

export default function PizzaToppings(props) {
    return (
        <div className="pizza-toppings">
            {props.selectedToppings.map(selectedTopping => {
                return (
                    <img
                        key={selectedTopping.toppingName}
                        src={selectedTopping.contentImage}
                        alt={selectedTopping.toppingName}
                    />
                );
            })}
        </div>
    );
}
