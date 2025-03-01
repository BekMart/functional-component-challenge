import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import CSS from "./css/Content.module.css";
import PostItem from './PostItem';
import Loader from './Loader';

export class Contents extends Component {
constructor(props) {
  super(props)

  this.state = {
    isLoaded: false
  }
}

componentDidMount() {
  console.log('Component mounted')
  setTimeout(() => {
    console.log('loaded!')
    this.setState({
      isLoaded: true
    })
  }, 2000)
}

  render() {
    return (
      <div className={CSS.Content}>
        <div className={CSS.TitleBar}>
            <h1>My Posts</h1>
        </div>

        <div className={CSS.SearchResults}>
          {this.state.isLoaded ? <PostItem savedPosts={savedPosts} /> : <Loader />}
        </div>
      </div>
    )
  }
}

export default Contents