import React, { Component } from 'react';

class SummaryList extends Component {
    render() {
        return (
            <div className="summary">
                <h2>Summary</h2>
                <ul className="items">
                    <li>
                        <span className="item">Pizza</span>
                        <span className="price">$9.99</span>
                        <ul>
                            <li>
                                <span className="item">Onion</span>
                                <span className="price">$0.99</span>
                            </li>
                            <li>
                                <span className="item">Mushroom</span>
                                <span className="price">$0.99</span>
                            </li>
                            <li>
                                <span className="item">Bacon</span>
                                <span className="price">$0.99</span>
                            </li>
                            <li>
                                <span className="item">Anchovy</span>
                                <span className="price">$0.99</span>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr />
                <p className="total-price">Total: $13.86</p>
                <p>
                    <button type="submit">Place order</button>
                </p>
            </div>
        );
    }
}

export default SummaryList;
