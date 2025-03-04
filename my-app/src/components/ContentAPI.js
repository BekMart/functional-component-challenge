import React, { Component } from 'react';
import CSS from "./css/Content.module.css";
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secrets';

export class ContentAPI extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      posts: [],
      savedPosts: [],
    }
  }

  componentDidMount() {
    this.fetchImages();
  }
  
  async fetchImages() {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
    const fetchedPosts = response.data.hits;

    this.setState({
        isLoaded: true,
        posts: fetchedPosts,
        savedPosts: fetchedPosts,
    })
  }

  // Filters posts to match text input/updates state
  handleSearch = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = this.savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(name);
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
            <PostItemAPI savedPosts={this.state.posts} /> 
            : <Loader />
          }
        </div>
      </div>
    )
  }
}
export default ContentAPI