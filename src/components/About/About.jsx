import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Row, Col } from 'react-bootstrap';

import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";
import ScrollAnimation from 'react-animate-on-scroll';

import html5 from '../../assets/html5.svg';
import css3 from '../../assets/css3.svg';
import bootstrap from '../../assets/bootstrap.svg';
import materialui from '../../assets/materialui.svg';
import javascript from '../../assets/javascript.svg';
import nodejs from '../../assets/nodejs.svg';
import mongodb from '../../assets/mongodb.svg';
import postgre from '../../assets/postgre.svg';
import react from '../../assets/react.svg';
import angular from '../../assets/angular.svg';
import github from '../../assets/github.svg';
import postman from '../../assets/postman.svg';
import npm from '../../assets/npm.svg';
import redux from '../../assets/redux.svg';

import mapWB from '../../assets/mapWB.png';

import './about.css';
import { Typography } from "@material-ui/core";

const SlideInRightAnimation = keyframes`${slideInRight}`;
const SlideInRightDiv = styled.div
  `animation: 3s ${SlideInRightAnimation};`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icons: {
    padding: theme.spacing(1),
    width: '90px',
    height: 'auto',
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div id="About" className="about">
      <div class="container">
        <Typography id="about-header" >ABOUT</Typography>
        <Row className="justify-content-md-center">
          <img id="bgMapImg" src={mapWB}></img>
          <Col md={6}>
            <Typography id="background-header" >BACKGROUND</Typography>
            <Typography id="background-text" > I am Genevieve Cyr, a web developer with the tools and experience to help you realize your next project.
              Whether it be a mobile app or a business website, I can help you materialize your vision.<br />
              Professional, intuitive and dedicated. I am putting my decade long career an an audio engineer to new use. Using the the skills, both technical and creative, that I have acquired over my careeer, and chanelling them to build and design innovative apps and websites.<br />
              I am enthusiastic and eager to learn, so don't
              hesitate if there are other programs you need - I am always happy to broaden my skills!
            </Typography>
          </Col>
          <Col md={6}>
            {/* <SlideInRightDiv> */}
            <Typography id="toolbelt-header" >TOOLBELT</Typography>
            {/* </SlideInRightDiv> */}

            <div className={classes.root}>
              <Grid container spacing={1}>
                <Grid item xs={2}>
                  <img src={html5} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={css3} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={bootstrap} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={materialui} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={javascript} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={nodejs} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={mongodb} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={postgre} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={react} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={angular} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={github} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={postman} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={npm} width="90px" className={classes.icons}></img>
                </Grid>
                <Grid item xs={2}>
                  <img src={redux} width="90px" className={classes.icons}></img>
                </Grid>
              </Grid>
            </div>
          </Col>
        </Row>
      </div>
    </div >
  );
}

export default About;