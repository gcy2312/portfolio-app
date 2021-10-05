import React, { useState } from "react";

import CaseStudy from '../CaseStudy/CaseStudy';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';

import { Row, Col } from 'react-bootstrap';
import { Typography, Button, Dialog, Slide, Toolbar, AppBar } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import './work.css';

import reactClientImg from '../../assets/myflix-react.png';
import angularClientImg from '../../assets/myflix-angular.png';
import chatImg from '../../assets/chatapp-img.png';
import meetImg from '../../assets/meetapp-img.png';
import pokedexImg from '../../assets/pokedex-img.png';
import apiImg from '../../assets/api-img.png';
import myFlixLogo from '../../assets/myflix-logo.png';


function Work(props) {
  var items = [
    {
      title: "CLIENT-SIDE ANGULAR",
      subtitle: "AngularCLI, MaterialUI, CSS",
      description: "A re-build of client-side for myFlix app using Angular. Same IMDB functionality implemented using Angular CLI, SCSS, and Material UI.",
      imagePath: `${angularClientImg}`,
      liveLink: "https://gcy2312.github.io/myFlix-Angular-client/welcome",
      gitLink: "https://github.com/gcy2312/myFlix-Angular-client",
      caseStudyLink: "testlink.com"
    },
    {
      title: "SERVERLESS WEB APP",
      subtitle: "ReactJS, Jest, Enzyme, AWS Lambda",
      description: "PWA built using React. App uses Google Calendar API to fetch upcoming events, and AWS Lambda to host serverless functionality.Developped using TDD approach(Jest & Enzyme).",
      imagePath: `${meetImg}`,
      liveLink: "https://gcy2312.github.io/meet-app/",
      gitLink: "https://github.com/gcy2312/meet-app",
    },
    {
      title: "CLIENT-SIDE REACT",
      subtitle: "ReactJS, Bootstrap, CSS",
      description: "Client-side programming for myFlix app using ReactJS. IMDB functionality, where users can browse and favorite a selection of movies.Uses MERN stack, Bootstrap, CSS.",
      imagePath: `${reactClientImg}`,
      liveLink: "https://gcy2312-react-myflix.netlify.app/",
      gitLink: "https://github.com/gcy2312/myFlix-client"
    },
    {
      title: "JAVASCRIPT APP",
      subtitle: "JavaScript, Bootstrap, CSS",
      description: "Lightweight JavaScript application (Pokedex). Uses external API, HTML, CSS, and Bootstrap.",
      imagePath: `${pokedexImg}`,
      liveLink: "https://gcy2312.github.io/Pokedex/",
      gitLink: "https://github.com/gcy2312/Pokedex",
    },
    {
      title: "NATIVE MOBILE APP",
      subtitle: "ReactNative, CSS",
      description: "Native mobile chat app developped using React Native. Provide users with chat interface (GiftedChat) and functionality to share images, location, and take photo with device camera.",
      imagePath: `${chatImg}`,
      gitLink: "https://github.com/gcy2312/chat-app/tree/features-function"
    },
    {
      title: "RESTful API",
      subtitle: "MongoDB, ReactJS, Node, Express",
      description: "Server-side programming for myFlix app. Built using MERN stack (MongoDB, Express, ReactJS, Node.js), and deployed using Heroku.",
      imagePath: `${apiImg}`,
      // liveLink: "https://myflix-movie-api-2312.herokuapp.com/",
      gitLink: "https://github.com/gcy2312/myFlix",
    },

  ]

  return (
    <div id="Work" className="work">
      <div class="container" >
        <Typography id="work-header" >WORK</Typography>
        <Row md={12} className="carousel">
          <Carousel
            animation="slide"
            interval="6000"
            NextIcon={<NavigateNextIcon />}
            PrevIcon={<NavigateBeforeIcon />}
          >
            {
              items.map((item, i) => <Item key={i} item={item} />)
            }
          </Carousel>
        </Row>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function Item(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Row className="justify-content-center">
      <Col md={7}>
        <img
          className="d-block w-100 p-2"
          src={props.item.imagePath}
          alt="Images of projects"
          id="projectImg"
        />
      </Col>
      <Col md={5}>
        <Typography id="title" >{props.item.title}</Typography>

        <Typography id="subtitle" variant="subtitle2"> {props.item.subtitle} </Typography>

        <Typography id="project-desc" >{props.item.description}</Typography>

        <div className="project-links">
          <Button id="projectBtn" variant="contained" href={props.item.gitLink} target="_blank">{'</>'}</Button>
          {
            props.item.liveLink ? <Button id="projectBtn" variant="contained" href={props.item.liveLink} target="_blank">Live</Button> : null
          }
          {
            props.item.caseStudyLink ? <Button id="projectBtn" variant="contained" onClick={handleClickOpen} >Case Study</Button> : null
          }

          <Dialog fullScreen TransitionComponent={Transition} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <AppBar className={classes.appBar} id="appBar">
              <Toolbar id="modalToolbar">
                <img id="myFlixLogo" src={myFlixLogo} />
                <IconButton autoFocus edge="start" id="modalClose" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <CaseStudy />
          </Dialog>


        </div>

      </Col>
    </Row>

  )
}

export default Work;