import React, { Component } from "react";
import { render } from "react-dom";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      Output: "",
      Add: "",
      Sub: "",
      Multiply: "",
    };
  }
  handleInput1 = (e) => {
    console.log(e.target.value);
    this.setState({
      input1: e.target.value,
    });
  };
  handleInput2 = (e) => {
    console.log(e.target.value);
    this.setState({
      input2: e.target.value,
    });
  };
  handleAddition = (e) => {
    let add = parseInt(this.state.input1) + parseInt(this.state.input2);
    console.log(add);
    this.setState({
      Output: parseInt(this.state.input1) + parseInt(this.state.input2),
    });
  };
  handleSubstraction = (e) => {
    this.setState({
      Output: parseInt(this.state.input1) - parseInt(this.state.input2),
    });
  };
  handleMultiply = (e) => {
    this.setState({
      Output: parseInt(this.state.input1) * parseInt(this.state.input2),
    });
  };
  handleDivide = (e) => {
    this.setState({
      Output: parseInt(this.state.input1) / parseInt(this.state.input2),
    });
  };
  handleOutput = (e) => {
    this.setState({
      Output: e.target.Output,
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.input1}
            onChange={this.handleInput1}
            type="text"
          />
        </div>
        <div>
          <input
            value={this.state.input2}
            onChange={this.handleInput2}
            type="text"
          />
        </div>
        <div>
          <button value={this.state.Output} onClick={this.handleAddition}>
            +
          </button>
          <button value={this.state.Output} onClick={this.handleSubstraction}>
            -
          </button>
          <button value={this.state.Output} onClick={this.handleMultiply}>
            *
          </button>
          <button value={this.state.Output} onClick={this.handleDivide}>
            /
          </button>
        </div>
        <div>{this.state.Output}</div>
      </div>
    );
  }
}

export default Calculator;
