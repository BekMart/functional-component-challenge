import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class NestingComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         isLoggedIn: false
      }
    }
  render() {
    return (
      <div>
        <UserData isLoaded={this.state.isLoaded} />
        <UserMessage isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
}

export default NestingComponent