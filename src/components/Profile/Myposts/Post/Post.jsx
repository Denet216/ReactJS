import React from "react";
import s from './Post.module.css'


const Post = (props) => {
  return (
    <div className={s.ava}>
    <img src="https://i.pinimg.com/originals/36/6c/49/366c49da3fc0cb9970ce9be4a288b261.jpg" alt=''/>
    {props.message}
    <div>
    <span>1 like</span>
    </div>
  </div>
  );
}

export default Post;
