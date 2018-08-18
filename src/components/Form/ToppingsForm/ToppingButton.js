import React from 'react';

export default function ToppingButton(props) {
    return (
        <button
            onClick={() => props.onToppingBtnClick(props.topping)}
            className={`topping ${props.selectedToppings.includes(
                props.topping
            ) && 'active'}`}
            // className={
            //     props.selectedToppings.includes(props.toppingName)
            //         ? 'topping active'
            //         : 'topping'
            // }
            type="button"
            id={props.topping.toppingName}
        >
            <img src={props.topping.labelImage} alt={props.topping.toppingName} />
            <span>{props.topping.toppingName}</span>
        </button>
    );
}
