import React from 'react';

export default function SummaryList(props) {
    return (
        <ul>
            {props.selectedToppings.map(selectedTopping => {
                return (
                    <li key={selectedTopping.toppingName}>
                        <span className="item">{selectedTopping.toppingName}</span>
                        <span className="price">{selectedTopping.price}</span>
                    </li>
                );
            })}
        </ul>
    );
}

// function renderSummaryList(selectedToppings) {
//     return (
//         <ul>
//             {selectedToppings.map(selectedTopping => (
//                 <li key={selectedTopping.name} className="topping-item-summary">
//                     <span className="item">{selectedTopping.name}</span>
//                     <span className="price">{`$${selectedTopping.price}`}</span>
//                 </li>
//             ))}
//         </ul>
//     );
// }
