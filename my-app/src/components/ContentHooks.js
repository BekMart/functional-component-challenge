import React, { useState, useEffect } from "react";
import { savedPosts } from "../posts.json";
import CSS from "./css/Content.module.css";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setFetchedPosts(savedPosts);
    }, 2000);
  }, []);

  const handleSearch = (e) => {
    const name = e.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLocaleLowerCase().includes(name);
    });
    setFetchedPosts(filteredPosts);
  };

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
            onChange={(e) => {
              handleSearch(e);
            }}
          />
          <h4>posts found:{fetchedPosts.length}</h4>
        </form>
      </div>
      <div className={CSS.SearchResults}>
        {isLoaded ? <PostItem savedPosts={fetchedPosts} /> : <Loader />}
      </div>
    </div>
  );
}

export default ContentHooks;
