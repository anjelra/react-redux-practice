import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: '송안젤라',
        phone: '010-1234-1234'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-1234-5678'
      }
    ],
    keyword: ''
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    });
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(info => 
          id === info.id ? 
          {...info, ...data} : 
          info)
    });
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  // 쓸데없는 rendering을 막기 위해 data가 달라졌을 때에만 rendering 될 수 있도록 구현
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps && nextProps.data !== this.props.data;
  // }

  render() {
    console.log('App.js render()');
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input
              placeholder="검색 할 이름을 입력하세요"
              onChange={this.handleChange}
              value={keyword}
            />
        </p>
        <hr/>
        <PhoneInfoList 
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpate}
        />
      </div>
    );
  }
}

export default App;
