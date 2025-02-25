import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";
import NavBarChild from "./NavBarChild";

export class NavBarForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  handleClick = () => {
    this.setState(
      (prevState) => ({
        isLoggedIn: prevState.isLoggedIn ? false : true,
      }),
      // Important to use a callback function to console.log the updated state
      () => console.log(this.state.isLoggedIn)
    );
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <NavBarChild
          isLoggedIn={this.state.isLoggedIn}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default NavBarForms;
