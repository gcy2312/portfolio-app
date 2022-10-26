import React from "react";
import './footer.css';
import { Navbar } from "react-bootstrap";
import { BottomNavigation, Link } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import mediumImg from '../../assets/icons8-medium.svg';
import skypeImg from '../../assets/skype.svg';

function Footer() {
  return (

    // <Container className="footer" expand="large" id="Footer" >
    <Navbar id="Footer" expand="large" className="justify-content-center" >

      <BottomNavigation id="icons-nav">
        <Link
          rel="noopener noreferrer" href="https://github.com/gcy2312?tab=repositories" target="_blank">
          <GitHubIcon aria-hidden="false" aria-label="GitHub icon" class="link-icons" style={{ fill: '#fff' }} />
        </Link>

        <Link
          rel="noopener noreferrer" href="https://www.linkedin.com/in/gcyrdev/" target="_blank">
          <LinkedInIcon aria-hidden="false" aria-label="Linkedin icon" class="link-icons" style={{ fill: '#fff' }} />
        </Link>

        <Link
          rel="noopener noreferrer" href="https://twitter.com/genevieve_cyr" target="_blank">
          <TwitterIcon aria-hidden="false" aria-label="Twitter icon" class="link-icons" style={{ fill: '#fff' }} />
        </Link>

        <Link
          rel="noopener noreferrer" href="https://medium.com/@gma.cyr/about" target="_blank">
          <img src={mediumImg} alt="link to Medium profile" class="link-icons"></img>
        </Link>

        <Link
          rel="noopener noreferrer" target="_blank" href="skype:gma.cyr?chat">
          <img src={skypeImg} alt="link to Skype profile" class="link-icons"></img>
        </Link>

      </BottomNavigation>
    </Navbar>
    // </Container>

  );
}

export default Footer;