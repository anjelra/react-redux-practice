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

  render() {
    const {information} = this.state;
    return (
      // <Counter/>
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList data={information}/>
      </div>
    );
  }
}

export default App;
