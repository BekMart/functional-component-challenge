import React, { Component } from "react";

export class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputCatagory = React.createRef();
    this.inputComments = React.createRef();
    };
  // Event handler called when the form is submitted
  handleSiubmit = (event) => {
    // Prevents the default action of reloading the page
    event.preventDefault();
    console.log(this.inputName.current.value);
    console.log(this.inputCatagory.current.value);
    console.log(this.inputComments.current.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSiubmit}>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input
              id="id-name"
              name="name"
              type="text"
              defaultValue=""
              ref={this.inputName}
            />
          </div>
          <div>
            <label htmlFor="id-catagory">Query Catagory:</label>
            <select
              id="id-catagory"
              name="catagory"
              ref={this.inputCatagory}
            >
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General question</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-commenmts">Comments:</label>
            <textarea
              id="id-comments"
              name="comments"
              ref={this.inputComments}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
