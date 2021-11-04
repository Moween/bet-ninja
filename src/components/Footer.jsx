import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const Footer = () => {
  return (
    <Box component="footer">
      <Typography component="p" className="copyright-text">
        &copy; {new Date().getFullYear()} BetNinja
      </Typography>
      <Box component="nav" aria-label="footer-nav" className="footer-nav">
        <List className="footer-list">
          <ListItem alignItems="flex-start">
            <ListItemText>Terms</ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText>Privacy</ListItemText>
          </ListItem><ListItem alignItems="flex-start">
            <ListItemText>Contact us</ListItemText>
          </ListItem><ListItem alignItems="flex-start">
            <ListItemText>About</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
