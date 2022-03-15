import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';

import { theme } from '../utils/muiStyles';

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'History',
    path: '/history',
  },
];

const Navbar = () => {
  const mobile = useMediaQuery(theme.breakpoints.down(768));
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));
  return (
    <nav className={mobile || tablet ? 'side-nav' : 'nav'}>
      <ul className={mobile || tablet ? 'side-nav-list' : 'nav_list'}>
        {navLinks.map((navLink) => (
          <NavLink
            to={navLink.path}
            key={navLink.name}
            style={({ isActive }) =>  ({ color: isActive ? 'red' : ''})}
          >
            {navLink.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
