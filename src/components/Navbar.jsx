import React from 'react';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@material-ui/core';

import { theme } from '../utils/muiStyles';

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
  const mobile = useMediaQuery(theme.breakpoints.down(768));
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));
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
