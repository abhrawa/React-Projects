import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  onSubmitHandle = (event) => {
    this.setState({});
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandle}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={this.state.comments}
            onChange={this.handleCommentChange}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.value} onChange={this.handleTopicChange}>
            <option>React</option>
            <option>Angular</option>
            <option>Node JS</option>
          </select>
        </div>

        <button>Submit</button>
        <div className="Textinput">
          {this.state.username}
          {this.handleUserNameChange}
          {this.state.comments}
          {this.handleCommentChange}
        </div>
      </form>
    );
  }
}
export default Form;
