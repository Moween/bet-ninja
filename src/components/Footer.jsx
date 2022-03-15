import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { theme } from '../utils/muiStyles';

const Footer = () => {
  const mobile = useMediaQuery(theme.breakpoints.down(768));
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));
  const footerLinks = ['Terms', 'Privacy', 'Contact us', 'About'];
  return (
    <Box component="footer">
      <Container maxWidth="xl" className="footer__div">
        <Typography
          component="p"
          className="copyright-text"
          sx={{ marginLeft: 0 }}
        >
          &copy; {new Date().getFullYear()} BetNinja
        </Typography>
        <Box component="nav" aria-label="footer-nav" className="footer-nav">
          <List className="footer-list">
            {footerLinks.map((link) => (
              <ListItem
                key={link}
                button
                component={Link}
                href="/"
                sx={{ paddingLeft: mobile || tablet ? 0 : '1rem' }}
                alignItems="flex-start"
              >
                <ListItemText>{link}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
