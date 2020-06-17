import React from 'react';

class App extends Comment {
  render() {
    const name = 'react'
    return (
      <div>
        hello {name}!
      </div>
    );
  }
}

export default App;
