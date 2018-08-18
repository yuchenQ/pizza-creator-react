import React, { Component } from 'react';
import Detail from './Detail';

class Details extends Component {
    render() {
        return (
            <div className="details">
                <h2>Enter your details</h2>
                <div className="details-container">
                    {this.props.details.map((name, index) => {
                        return <Detail key={index} name={name} />;
                    })}
                </div>
            </div>
        );
    }
}

export default Details;
