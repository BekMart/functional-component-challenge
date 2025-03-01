import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import CSS from "./css/Content.module.css";

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
            {savedPosts.map((post) => {
                return (
                    <div className={CSS.SearchItem} key={post.title}>
                        <p>{post.title}</p>
                        <p>{post.name}</p>
                        <img src={post.image} alt=""></img>
                        <p>{post.description}</p>                       
                    </div>
                );
            })}
        </div>
      </div>
    )
  }
}

export default Contents