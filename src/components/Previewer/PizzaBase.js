import React from 'react';

export default function PizzaBase() {
    return (
        <div className="pizza-base">
            <img src={window.location.origin + '/assets/base.svg'} alt="Pizza base" />
        </div>
    );
}

