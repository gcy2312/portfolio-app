import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from 'react-scroll';
import { Typography, Button } from '@material-ui/core';

import logoImg from '../../assets/logoname1000.png';

import './navigation.css';
// import { Link, withRouter } from "react-router-dom";


function Navigation(props) {

  return (
    <Navbar id="navbar" fixed="top" expand="lg">
      <img src={logoImg} height="80" width="auto"></img>
      <Navbar.Toggle />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

        <Link activeClass="active" to="Home" spy={true} offset={-100} smooth={true}>
          <Button id="navBtn">Home</Button>
        </Link>
        <Link activeClass="active" to="About" spy={true} offset={-40} smooth={true}>
          <Button id="navBtn">About</Button>
        </Link>
        <Link activeClass="active" to="Work" spy={true} offset={-80} smooth={true}>
          <Button id="navBtn">Work</Button>
        </Link>
        <Link activeClass="active" to="Contact" spy={true} offset={-85} smooth={true}>
          <Button id="navBtn">Contact</Button>
        </Link>

      </Navbar.Collapse>
    </Navbar>

  );
}

export default Navigation;