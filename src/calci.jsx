import { render } from "react-dom";
import React, { Component } from "react";

class Calci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      Result: "",
    };
  }
  handlenum1 = (e) => {
    console.log(e.target.value);
    this.setState({
      num1: e.target.value,
    });
  };
  handlenum2 = (e) => {
    console.log(e.target.value);
    this.setState({
      num2: e.target.value,
    });
  };
  handleAddition = (e) => {
    let add = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({
      Output: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
  };
  handleSubstraction = (e) => {
    this.setState({
      Output: parseInt(this.state.num1) - parseInt(this.state.num2),
    });
  };
  handleMultiply = (e) => {
    this.setState({
      Output: parseInt(this.state.num1) * parseInt(this.state.num2),
    });
  };
  handleDivide = (e) => {
    this.setState({
      Output: parseInt(this.state.num1) / parseInt(this.state.num2),
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
            value={this.state.num1}
            onChange={this.handlenum1}
            type="text"
          />
        </div>
        <div>
          <input
            value={this.state.num2}
            onChange={this.handlenum2}
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
export default Calci;
