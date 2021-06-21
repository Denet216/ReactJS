import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = () => {
  return (
  <div>
    My post
    <div>
    <textarea></textarea>
    <button>Click</button>
      </div>
      <div ClassNane={s.posts}>
        <Post message="Купил лего?" />
        <Post message="Да, Отличная штука"/>
        </div>
      </div>
  );
}

export default MyPosts;
