import React, { Component } from 'react';

class ToppingsContainer extends Component {
    constructor(props) {
        super(props);
        this.getBtn = this.getBtn.bind(this);
    }

    getBtn(props) {
        const toppings = [...props.toppings];
        return toppings.map(({ name, labelImage }) => {
            return (
                <ToppingButton key={name} name={name} labelImage={labelImage} />
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Choose your toppings</h2>
                <div className="toppings-container">
                    {this.getBtn(this.props)}
                </div>
            </div>
        );
    }
}

function ToppingButton(props) {
    return (
        <button className="topping" type="button" id={props.name}>
            <img src={props.labelImage} alt={props.name} />
            <span>{props.name}</span>
        </button>
    );
}

export default ToppingsContainer;
