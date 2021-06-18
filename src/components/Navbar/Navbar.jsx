import React from "react";
import s from './Navbar.module.css'


const NavBar = () => {
  return (
    <nav className={s.nav}>
    <div>
    <a href='#'>Profile</a>
    </div>
    <div>
      <a href='#'>Messages</a>
      </div>
     <div>
     <a href='#'>Main Content</a>
        </div>
  </nav>
  );
}

export default NavBar;
