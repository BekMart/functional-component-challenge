import React from 'react'
import CSS from "./css/PostItem.module.css";

function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            const { name, title, description, image } = post;
                return <div className={CSS.SearchItem} key={title}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img src={image} alt=""/>
                    <p>{description}</p>                       
                </div>
            }
        )
    )
}

export default PostItem