import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import CSS from "./css/Content.module.css";
import PostItem from './PostItem';

export class Contents extends Component {
    constructor(props) {
      super(props)
    }
  render() {
    return (
      <div className={CSS.Content}>
        <div className={CSS.TitleBar}>
            <h1>My Posts</h1>
        </div>
        <div className={CSS.SearchResults}>
            <PostItem savedPosts={savedPosts} />
        </div>
      </div>
    )
  }
}

export default Contents