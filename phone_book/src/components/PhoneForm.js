import React, { Component } from "react";

class PhoneForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            // e.target.name 이라고 적어주면, input의 name이라고 적은 거에 접근할 수 있다.
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);

        this.setState({
            name: '',
            phone: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                placeholder="이름"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                />
                <input
                placeholder="전화번호"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                />
                <div>{this.state.name}</div>
                <div>{this.state.phone}</div>
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;