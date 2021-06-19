import React from "react";
import s from './Navbar.module.css'


const NavBar = () => {
  return (
    <nav className={s.nav}>
    <div className={s.category}>
    <a href='#'>Profile</a>
    </div>
    <div className={s.category}>
      <a href='#'>Messages</a>
      </div>
     <div className={s.category}>
     <a href='#'>Main Content</a>
        </div>
  </nav>
  );
}

export default NavBar;
