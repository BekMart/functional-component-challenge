import React from 'react'
import CSS from "./css/PostItem.module.css";

function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            const posts = props.posts
                return <div className={CSS.SearchItem} key={post.title}>
                    <p>{post.title}</p>
                    <p>{post.name}</p>
                    <img src={post.image} alt=""/>
                    <p>{post.description}</p>                       
                </div>
            }
        )
    )
}

export default PostItem