import React, { Component } from 'react';
import './Css/App.sass';


class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
