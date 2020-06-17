import React, { Component } from "react";

// state 문법을 정의할 때에는, class형 컴포넌트를 사용한다.
class Counter extends Component {
    // 우리는 Component를 상속받았다. 
    // super(props) 라고 써주는 이유는, 우리가 constructor()를 class에서 사용하게 되면 Component의 constructor() 를 
    // 덮어쓰기 때문에 super(props)로 기존 Component의 생성자를 미리 실행한 후, 새로 추가할 생성자를 입력해야 하기 떄문이다.
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            // 아래의 state를 변경해주기 위해서는 ,
            /**
             * this.setState({
             *      foo: {
             *          foobar: 2
             *      }
             * });
             * 라고 하게 되면, foo 객체가 통채로 바뀌어 버리기 떄문에 이렇게 하면 안되고, 
             * this.setState({
             *      foo: {
             *          bar: ...this.state.bar,
             *          foobar: 2
             *      }
             * });
             * 라고 변경해줘야 한다. 
             * 위와 같은 방법도 있지만, immutable.js 나 immer.js 를 사용하면 좀 더 간단하게 작성할 수 있다.
             */
            foo: {
                bar: 0,
                foobar: 1
            }
        };
    }
    // state = {
    //     number: 0
    // };

    // 1안
    // handleIncrease = () => {
    //     this.setState({
    //         number: this.state.number + 1
    //     });
    // }
    // // 2안
    // handleIncrease = ({number}) => {
    //     this.setState({
    //         number: number + 1
    //     });
    // }

    // 3안
    handleIncrease = () => {
        // this.state의 number를 가지고 오겠다.
        // 자바스크립트의 구조 분해 할당 표현식이다.
        const {number} = this.state;
        // const {foo} = this.state;
        this.setState({
            number: number + 1
        });
    }


    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number} </div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;