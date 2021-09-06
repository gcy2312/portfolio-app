import React from "react";
import './footer.css';
import { BottomNavigation, Link, Container, Box } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import mediumImg from '../../assets/icons8-medium.svg';
import skypeImg from '../../assets/skype.svg';

function Footer() {
  return (

    <Container className="footer" >

      <BottomNavigation>
        <Link
          rel="noopener noreferrer" href="https://github.com/gcy2312?tab=repositories" target="_blank">
          <GitHubIcon class="link-icons" />
        </Link>

        <Link
          rel="noopener noreferrer" href="https://www.linkedin.com/in/genevieve-cyr-08553739/" target="_blank">
          <LinkedInIcon class="link-icons" />
        </Link>

        <Link
          rel="noopener noreferrer" href="https://twitter.com/genevieve_cyr" target="_blank">
          <TwitterIcon class="link-icons" />
        </Link>

        <Link
          rel="noopener noreferrer" href="https://medium.com/@gma.cyr/about" target="_blank">
          <img src={mediumImg} class="link-icons"></img>
        </Link>

        <Link
          rel="noopener noreferrer" href="skype:<gma.cyr>[?[add|call|chat|sendfile|userinfo]]" target="_blank">
          <img src={skypeImg} class="link-icons"></img>
        </Link>

      </BottomNavigation>

    </Container>

  );
}

export default Footer;