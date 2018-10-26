import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { x:100, y:200 };
  }
  
  change = (e)=> {
    let newValue = Number(e.target.value);
    if (e.target.id=="x") 
      this.setState({ x: newValue });
    else
      this.setState({ y: newValue });
  }

  render() {
    return (
      <div>
        x : <input id="x" type="text" value={this.state.x}
          onChange={this.change} /><br />
        y : <input id="y" type="text" value={this.state.y}
          onChange={this.change} /><br />
        결과 : <span>{this.state.x + this.state.y }</span>
      </div>
    );
  }
}

export default App;