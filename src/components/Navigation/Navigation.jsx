import React from "react";
import { Link } from 'react-scroll'
// import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar sticky navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Multi-Page Website
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">

              <li class="nav-item"><Link activeClass="active" to="Home" spy={true} smooth={true}>Home</Link></li>
              <li class="nav-item"><Link to="About" spy={true} smooth={true}>About</Link></li>
              <li class="nav-item"><Link to="Work" spy={true} smooth={true}>Work</Link></li>
              <li class="nav-item"><Link to="Contact" spy={true} smooth={true}>Contact</Link></li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;