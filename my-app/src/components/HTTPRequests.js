import React, { Component } from "react";
import axios from "axios";

export class HTTPRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  // Make sure that the response.data is put into an array even if a single object
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      console.log(response);
      this.setState({
        posts: Array.isArray(response.data)
        ? response.data
        : [response.data]
      });
    });
  }
  render() {
    const posts = this.state.posts;
    return (
      <div>
        <h2>Posts:</h2>
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.id}. {post.title}</h2>
              <h4>By User ID: {post.userId}</h4>
              <p>{post.body}</p>
              <hr />
            </div>
          ))
        ) : (
          <h4>Loading posts...</h4>
        )}
      </div>
    );
  }
}

export default HTTPRequests;
