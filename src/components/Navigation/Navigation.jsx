import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from 'react-scroll'
import { Typography, Button } from '@material-ui/core';

import './navigation.css';
// import { Link, withRouter } from "react-router-dom";


function Navigation(props) {

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Typography id="title" variant="h6">
        Portfolio
      </Typography>
      <Navbar.Toggle />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

        <Link activeClass="active" to="Home" spy={true} smooth={true}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link activeClass="active" to="About" spy={true} smooth={true}>
          <Button color="inherit">About</Button>
        </Link>
        <Link activeClass="active" to="Work" spy={true} smooth={true}>
          <Button color="inherit">Work</Button>
        </Link>
        <Link activeClass="active" to="Contact" spy={true} smooth={true}>
          <Button color="inherit">Contact</Button>
        </Link>

      </Navbar.Collapse>
    </Navbar>

  );
}

export default Navigation;