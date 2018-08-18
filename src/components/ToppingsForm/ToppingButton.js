import React from 'react';

export default function ToppingButton(props) {
    return (
        <button
            onClick={() => props.onToppingBtnClick(props.toppingName)}
            // className={`topping ${props.selectedToppings.includes(
            //     props.toppingName
            // ) && 'active'}`}
            className={
                props.selectedToppings.includes(props.toppingName)
                    ? 'topping active'
                    : 'topping'
            }
            type="button"
            id={props.toppingName}
        >
            <img src={props.labelImage} alt={props.toppingName} />
            <span>{props.toppingName}</span>
        </button>
    );
}
