import React from "react";
import { Typography } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import Typist from 'react-typist';

import './home.css';

function Home() {
  return (
    <div id="Home" className="home">
      <div class="container">
        <Typography id="home-header" variant="h3">Home</Typography>

        <Row className="justify-content-md-center">

          <Col md={5}>

            <Typist className="MyTypist">
              <span className="my-custom-class"> First Sentenc. Lorem ipsum is the short-hand term for the most popular placeholder text in history, used for decades by graphic designers, web developers, and the publishing industry. e </span>
              <br />
              <div className="container">
                <p> This will be animated after first sentence is complete. Here’s what a paragraph of lorem ipsum looks like: Lorem Ipsum dolor sit amet, </p>
                <p prop1="val1"> More text.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              Final sentence
            </Typist>

          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;