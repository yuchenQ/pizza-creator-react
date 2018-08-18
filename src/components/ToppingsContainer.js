import React, { Component } from 'react';

class ToppingsContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.getBtn = this.getBtn.bind(this);
    // }

    // Button 应该做成一个 Component
    // 为什么要用一个方法去返回 Component
    // 我们用 React Component 的目的就是用写 HTML 的方式去写
    // getBtn(props) {
    //     const toppings = [...props.toppings];
    //     return toppings.map(({ name, labelImage }) => {
    //         return (
    //             <ToppingButton key={name} name={name} labelImage={labelImage} />
    //         );
    //     });
    // }

    render() {
        return (
            <div>
                <h2>Choose your toppings</h2>
                <div className="toppings-container">
                    {
                        this.props.toppings.map(({ name, labelImage }) => {
                            return (
                                <ToppingButton key={name} name={name} labelImage={labelImage} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
// 那这个图片的问题呢？我是去看GitHub还是。。？
function ToppingButton(props) {
    return (
        <button className="topping" type="button" id={props.name}>
            <img src={props.labelImage} alt={props.name} />
            <span>{props.name}</span>
        </button>
    );
}

export default ToppingsContainer;
