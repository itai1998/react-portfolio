import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/i-tai-lin/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/itai1998" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Github" /></a>
                <a href="https://livebyuh-my.sharepoint.com/personal/itai1998_go_byuh_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fitai1998%5Fgo%5Fbyuh%5Fedu%2FDocuments%2F%E5%B1%A5%E6%AD%B7%2FResume%202024%2D09%2D30%2Epdf&parent=%2Fpersonal%2Fitai1998%5Fgo%5Fbyuh%5Fedu%2FDocuments%2F%E5%B1%A5%E6%AD%B7&ga=1" target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let's Email</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
