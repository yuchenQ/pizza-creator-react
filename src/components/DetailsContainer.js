import React, { Component } from 'react';

class DetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.getDetail = this.getDetail.bind(this);
    }

    getDetail(props) {
        const details = [...props.details];
        console.log(details);
        return details.map((name, index) => {
            return <Detail name={name} key={index} />;
        });
    }

    render() {
        return (
            <div className="details">
                <h2>Enter your details</h2>
                <div className="details-container">
                    {this.getDetail(this.props)}
                </div>
            </div>
        );
    }
}

function Detail(props) {
    return (
        <div className="detail">
            <label htmlFor={props.name}>
                {props.name}
            </label>
            <input type="text" id={props.name} name={props.name} />
        </div>
    );
}

export default DetailsContainer;
