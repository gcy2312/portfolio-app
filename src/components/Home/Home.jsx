import React from "react";
import { Typography, Container } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import Typist from 'react-typist';

import logoImg from '../../assets/logo700.png';

import './home.css';

// const genevieveCyr = (name) => {
//   loadPortfolioApp();
//   if (name === 'Curious') {
//     scrollDown();
//   } else if (name === 'Have a question') {
//     contactPage();
//   } else {
//     codingTime();
//   }
// };

function Home() {
  return (
    <div id="Home" className="home">
      <div class="container">
        <Typography id="home-header" variant="h3"></Typography>

        <Row className="justify-content-md-center">

          <Col md={7} sm={12}>
            <img class="bgImg" src={logoImg}></img>
            <Container>

              <Typist avgTypingDelay={20} stdTypingDelay={10} className="typist">
                <span className="gray">//declare web developer</span><br />
                <span className="orange">const </span><span className="blue">genevieveCyr </span><span className="pink">= </span>
                <span className="blue">(</span><span className="yellow">name</span><span className="blue">) </span><span className="orange">{'=> '}</span>
                <span className="white">{' {'}</span>
                <br />
                <div className="onetab">
                  <span className="blue">loadPortfolioApp</span><span className="white">();</span>
                  <br />
                  <span className="pink">if </span><span className="white">(</span><span className="yellow">name </span><span className="pink">=== </span>
                  <span className="green">'Curious'</span><span className="white">)</span><span className="white">{' {'}</span>
                  <br />
                  <div className="twotab">
                    <span className="blue">scrollDown</span><span className="white">();</span>
                  </div>

                  <span className="white">{'} '}</span><span className="pink">else if </span><span className="white">(</span><span className="yellow">name </span><span className="pink">=== </span>
                  <span className="green">'Have a question'</span><span className="white">)</span><span className="white">{' {'}</span>
                  <br />
                  <div className="twotab">
                    <span className="blue">contactPage</span><span className="white">();</span>
                  </div>

                  <span className="white">{'} '}</span><span className="pink">else</span><span className="white">{' {'}</span>
                  <br />
                  <div className="twotab">
                    <span className="blue">codingTime</span><span className="white">();</span>
                  </div>
                  <span className="white">{'}'}</span>
                </div>
                <span className="white">{'};'}</span>

              </Typist>
            </Container>

          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;