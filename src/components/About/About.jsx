import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Row, Col } from 'react-bootstrap';

import html5 from '../../assets/html5.svg';
import css3 from '../../assets/css3.svg';
// import bootstrap from '../../assets/bootstrap.svg';
// import materialui from '../../assets/materialui.svg';
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

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  icons: {
    padding: theme.spacing(1),
    width: '80px',
    height: 'auto',
    textAlign: 'center',
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
          <img id="bgMapImg" alt="map background" src={mapWB}></img>
          <Col md={8} sm={12}>
            <Typography id="background-header" >BACKGROUND</Typography>
            <Typography id="background-text" > I am Genevieve Cyr, a web developer with the tools and experience to help your next project succeed. Whether it be a mobile app or a business website, I can help execute your vision.<br />
              I am a meticulous, organized, motivated frontend developer with a constant positive approach to collaboration and problem-solving. My work as a developer for a SAAS Fintech company, building and designing web applications using React.js and TailwindCSS, has developed my skills in writing maintainable, scalable code, while working effectively both autonomously and as part of a cohesive dev team in a fast-paced environment. Furthermore, with my decade-long training as an audio engineer, I am able to leverage the technical and creative skills that I have developed over my career to build innovative and intuitive user experiences.<br />
              Please don't hesitate if there are other technologies you need. I am enthusiastic, eager to learn and always ready to embrace new challenges.
            </Typography>
          </Col>
        </Row>
        <Row className="justify-content-center toolbelt">
          <Col md={12}>

            {/* <Typography id="toolbelt-header" >TOOLBELT</Typography>
             */}

            <div className={classes.root}>
              <Grid container spacing={0.5}>
                <Grid item md={1} xs={3}>
                  <img src={react} alt="React logo" className={classes.icons}></img>
                </Grid>
                <Grid item md={1} xs={3}>
                  <img src={angular} alt="Angular logo" className={classes.icons}></img>
                </Grid>
                <Grid item md={1} xs={3}>
                  <img src={javascript} alt="JavaScript logo" className={classes.icons}></img>
                </Grid>
                <Grid item md={1} xs={3}>
                  <img src={html5} alt="HTML5 logo" className={classes.icons}></img>
                </Grid>
                <Grid item md={1} xs={3}>
                  <img src={css3} alt="CSS3 logo" className={classes.icons}></img>
                </Grid>
                {/* <Grid item md={1} xs={3}>
                  <img src={bootstrap} alt="Bootstrap logo" className={classes.icons}></img>
                </Grid>
                <Grid item md={1} xs={3}>
                  <img src={materialui} alt="Material UI logo" className={classes.icons}></img>
                </Grid> */}

                <Grid item md={1} xs={3}>
                  <img src={nodejs} alt="Node.js logo" className={classes.icons}></img>
                </Grid>
                <Grid item md={1} xs={3}>
                  <img src={mongodb} alt="Mongo logo" className={classes.icons}></img>
                </Grid>
                <Grid item md={1} xs={3}>
                  <img src={postgre} alt="Postgre logo" className={classes.icons}></img>
                </Grid>

                <Grid item md={1} xs={3}>
                  <img src={github} className={classes.icons}></img>
                </Grid>
                <Grid item md={1} xs={3}>
                  <img src={postman} alt="Postman logo" className={classes.icons}></img>
                </Grid>
                <Grid item md={1} xs={3}>
                  <img src={npm} alt="NPM logo" className={classes.icons}></img>
                </Grid>
                <Grid item md={1} xs={3}>
                  <img src={redux} className={classes.icons}></img>
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