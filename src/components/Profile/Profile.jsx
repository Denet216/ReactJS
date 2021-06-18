import React from "react";
import Myposts from './Myposts/MyPosts'
import s from './Profile.module.css'



const Profile = () => {
  return (
    <div className={s.content}>
    <div>
      <img src='https://static.mir-kubikov.ru/upload/iblock/796/796e50f8891669bd30a9c39cb6ad4269.jpg' alt=''/>
  </div>
  <div>
  ava + discription
  </div>
  <Myposts />
</div>
  );
}

export default Profile;
