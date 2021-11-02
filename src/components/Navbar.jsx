import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'History',
    path: '/pages/history',
  },
];

const Navbar = () => {
  return ( 
    <nav className="nav">
      <ul className="nav_list">
        {navLinks.map((navLink) => (
          <Link to={navLink.path} key={navLink.name}>{navLink.name}</Link>
        ))}
      </ul>
    </nav>
  );
}
 
export default Navbar;