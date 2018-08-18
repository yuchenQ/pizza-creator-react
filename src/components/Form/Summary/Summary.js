import React, { Component } from 'react';
import SummaryList from './SummaryList';
import TotalPrice from './TotalPrice';

class Summary extends Component {
    render() {
        return (
            <div className="summary">
                <h2>Summary</h2>
                <ul className="items">
                    <li>
                        <span className="item">Pizza</span>
                        <span className="price">$9.99</span>
                        <SummaryList
                            selectedToppings={this.props.selectedToppings}
                        />
                    </li>
                </ul>
                <hr />
                <TotalPrice
                    selectedToppings={this.props.selectedToppings}
                    pizzaPrice={this.props.pizzaPrice}
                />
                <p>
                    <button type="submit">Place order</button>
                </p>
            </div>
        );
    }
}

export default Summary;
