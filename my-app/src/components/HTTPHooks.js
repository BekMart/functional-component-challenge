import React, { useState, useEffect } from "react";
import axios from "axios";

function HTTPHooks() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        const data = Array.isArray(response.data) 
            ? response.data 
            : [response.data]
        setPosts(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Posts:</h2>
      {posts.length ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>
              {post.id}. {post.title}
            </h2>
            <h4>By User ID: {post.userId}</h4>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      ) : error ? (
        <p>{error}</p>
      ) : (
        <h4>Loading posts...</h4>
      )}
    </div>
  );
}

export default HTTPHooks;
