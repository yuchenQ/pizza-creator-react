import React from 'react';

export default function Detail(props) {
    return (
        <div className="detail">
            <label htmlFor={props.name}>
                {props.name}
            </label>
            <input type="text" id={props.name} name={props.name} />
        </div>
    );
}