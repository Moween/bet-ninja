import React from 'react';
import Link from '@mui/material/Link';

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

const Navbar = ({ smallAndTabScreen }) => {
  return (
    <nav className={smallAndTabScreen ? 'side-nav' : 'nav'}>
      <ul className={smallAndTabScreen ? 'side-nav-list' : 'nav_list'}>
        {navLinks.map((navLink) => (
          <Link href={navLink.path} key={navLink.name}>
            {navLink.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
