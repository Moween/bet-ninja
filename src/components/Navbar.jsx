import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    name: 'Sports',
    path: '/',
  },
   {
    name: 'History',
    path: '/history',
  },{
    name: 'Sign up',
    path: '/',
  },{
    name: 'Login',
    path: '/',
  },
];

const Navbar = () => {
  return ( 
    <nav>
      <ul>
        {navLinks.map((navLink) => (
          <Link to={navLink.path}>{navLink.name}</Link>
        ))}
      </ul>
    </nav>
  );
}
 
export default Navbar;