import React, { Component } from "react";

export class ControlledForm extends Component {
  constructor(props) {
    super(props);
    // Set initial state values
    this.state = {
      name: "",
      catagry: "website",
      comments: "",
    };
  }

  // Event handler called when the name input changes
  handleNameChange = (event) => {
    this.setState({
      // Set the name state to the value of the input
      name: event.target.value,
    });
  };

  // Event handler called when the catagory select changes
  handleCatagoryChange = (event) => {
    this.setState({
      // Set the catagory state to the value of the select
      catagory: event.target.value,
    });
  };

  // Event handler called when the comments textarea changes
  handleCommentsChange = (event) => {
    this.setState({
      // Set the comments state to the value of the textarea
      comments: event.target.value,
    });
  };

  // Event handler called when the form is submitted
  handleSiubmit = (event) => {
    // Prevents the default action of reloading the page
    event.preventDefault();
    // Prints all the state data which is saved in the state object
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSiubmit}>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input
              value={this.state.name}
              onChange={this.handleNameChange}
              id="id-name"
              name="name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="id-catagory">Query Catagory:</label>
            <select
              value={this.state.catagory}
              onChange={this.handleCatagoryChange}
              id="id-catagory"
              name="catagory"
            >
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General question</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-commenmts">Comments:</label>
            <textarea
              value={this.state.comments}
              onChange={this.handleCommentsChange}
              id="id-comments"
              name="comments"
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ControlledForm;
