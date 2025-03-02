import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import CSS from "./css/Content.module.css";
import PostItem from './PostItem';
import Loader from './Loader';

export class Contents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      posts: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: savedPosts,
      })
    }, 2000)
  }

  // Filters posts to match text input/updates state
  handleSearch = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name);
    })
    this.setState({
      posts: filteredPosts,
    })
  }

  render() {
    return (
      <div className={CSS.Content}>
        <div className={CSS.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor="searchInput">Search</label>
            <input
              type="text" 
              id="searchInput" 
              placeholder="By Author"
              onChange={(event) => this.handleSearch(event)}
            />
            <h4>posts found:{this.state.posts.length}</h4>
          </form>
        </div>
        <div className={CSS.SearchResults}>
          {
            this.state.isLoaded ? 
            <PostItem savedPosts={this.state.posts} /> 
            : <Loader />
          }
        </div>
      </div>
    )
  }
}
  
export default Contents