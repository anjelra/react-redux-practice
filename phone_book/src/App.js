import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

// function App() {
//   handleCreate = (data) => {
//     console.log(data);
//   }

//   return (
//     <div className="App">
//       <PhoneForm onCreate={this.handleCreate}/>
//     </div>
//   );
// }

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate}/>
      </div>
    );
  }
}

export default App;
