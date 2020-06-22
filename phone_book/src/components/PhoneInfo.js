import React, { Component } from "react";

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-1234',
            id: 0
        }
    }

    state = {
        name: '',
        phone: '',
        editing: false
    }

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleChange = (e) => {
        // onChange 이벤트가 일어나면 state값을 변경해준다.
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({
            editing: !editing
        });
    }
    
    // render() 함수 호출된 다음에 호출
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');

        // editing 값이 바뀔 떄 처리할 로직이 적혀있음.
        // 수정버튼을 누르면 기존의 input 값이 나타나고,
        // 적용버튼을 클릭하면 input의 값들을 부모에게 전달해줌.
        const {info, onUpdate} = this.props;

        // 이전 state값 : false이고 현재 state값이 true이면
        if (!prevState.editing && this.state.editing) {
            // 즉, 수정버튼을 누르면
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }

        if (prevState.editing && !this.state.editing) {
            // 적용버튼을 누르면
            // 정보를 업데이트 해줘야 한다. 내가 쓴 값으로
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    render() {
        console.log('render');
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {editing} = this.state;
        if (editing) {  // 수정모드이면
            return (
                <div style={style}>
                    <div>
                        <input 
                            type="text"
                            data={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            data={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                        <button onClick={this.handleToggleEdit}>적용</button>
                        <button onClick={this.handleRemove}>삭제</button>
                    </div>
                </div>
            );
        } else { // 아니면
            const {name, phone} = this.props.info;
            return (
                <div style={style}>
                    <div><b>{name}</b></div>
                    <div>{phone}</div>
                    <button onClick={this.handleRemove}>삭제</button>
                    <button onClick={this.handleToggleEdit}>수정</button>
                </div>
            );
        }
    }
}

export default PhoneInfo;