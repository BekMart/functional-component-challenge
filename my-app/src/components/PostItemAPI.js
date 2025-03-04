import React from 'react'
import CSS from "./css/PostItem.module.css";

function PostItemAPI(props) {
    return (
        props.savedPosts.map(post => {
            const { id, type, user, webformatURL, tags } = post;
                return <div className={CSS.SearchItem} key={id}>
                    <p>Artwork type:{type}</p>
                    <p>Artist:{user}</p>
                    <img src={webformatURL} alt=""/>
                    <p>Tags:{tags}</p>                       
                </div>
            }
        )
    )
}

export default PostItemAPI