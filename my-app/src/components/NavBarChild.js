import React from "react";

function NavBarChild(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <button onClick={props.handleClick}>Login</button>
      ) : (
        <div>
          <form>
            <label htmlFor = "username">Username:</label>
            <input type="text" placeholder="Username" id="username" />

            <label htmlmFor = "password">Password:</label>
            <input type="password" placeholder="Password" id="password" />

            <button onClick={props.handleClick}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default NavBarChild;
