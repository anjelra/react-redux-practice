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
    ]
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

  render() {
    const {information} = this.state;
    return (
      // <Counter/>
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
          data={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpate}
        />
      </div>
    );
  }
}

export default App;
