import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>{this.props.text}</h1>
        </header>
      </div>
    );
  }
}

export default App;
