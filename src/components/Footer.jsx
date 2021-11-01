import React from 'react'

const Footer = () => {
  return ( 
    <footer>
      <p className="copyright-text">&copy; {new Date().getFullYear()}  BetNinja</p>
      <nav className="footer-nav">
        <ul className="footer-list">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Contact us</li>
          <li>About</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </footer>
  );
}
 
export default Footer;