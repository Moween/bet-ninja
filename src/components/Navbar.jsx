import React from 'react';
import { useSelector } from 'react-redux';
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

const Navbar = () => {
  const mobile = useSelector((state) => state.mediaQuery.mobile);
  const tablet = useSelector((state) => state.mediaQuery.tablet);
  return (
    <nav className={mobile || tablet ? 'side-nav' : 'nav'}>
      <ul className={mobile || tablet ? 'side-nav-list' : 'nav_list'}>
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
