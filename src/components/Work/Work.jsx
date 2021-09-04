import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import { Container, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import './work.css';

import reactClientImg from '../../assets/myflix-react.png';
import angularClientImg from '../../assets/myflix-angular.png';
import chatImg from '../../assets/chatapp-img.png';
import meetImg from '../../assets/meetapp-img.png';
import pokedexImg from '../../assets/pokedex-img.png';
import apiImg from '../../assets/api-img.png';


function Work(props) {
  var items = [
    {
      title: "Client-Side React",
      subtitle: "ReactJS, Bootstrap, CSS",
      description: "Client-side programming for myFlix app using ReactJS. IMDB functionality, where users can browse and favorite a selection of movies.Uses MERN stack, Bootstrap, CSS.",
      imagePath: `${reactClientImg}`,
      liveLink: "https://gcy2312-react-myflix.netlify.app/",
      gitLink: "https://github.com/gcy2312/myFlix-client"
    },
    {
      title: "Serverless Web App",
      subtitle: "ReactJS, Jest, Enzyme, AWS Lambda",
      description: "PWA built using React. App uses Google Calendar API to fetch upcoming events, and AWS Lambda to host serverless functionality.Developped using TDD approach(Jest & Enzyme).",
      imagePath: `${meetImg}`,
      liveLink: "https://gcy2312.github.io/meet-app/",
      gitLink: "https://github.com/gcy2312/meet-app",
    },
    {
      title: "Client-Side Angular",
      subtitle: "AngularCLI, MaterialUI, CSS",
      description: "A re-build of client-side for myFlix app using Angular. Same IMDB functionality implemented using Angular CLI, SCSS, and Material UI.",
      imagePath: `${angularClientImg}`,
      liveLink: "https://gcy2312.github.io/myFlix-Angular-client/welcome",
      gitLink: "https://github.com/gcy2312/myFlix-Angular-client",
    },
    {
      title: "JavaScript App",
      subtitle: "JavaScript, Bootstrap, CSS",
      description: "Lightweight JavaScript application (Pokedex). Uses external API, HTML, CSS, and Bootstrap.",
      imagePath: `${pokedexImg}`,
      liveLink: "https://gcy2312.github.io/Pokedex/",
      gitLink: "https://github.com/gcy2312/Pokedex",
    },
    {
      title: "Native Mobile App",
      subtitle: "ReactNative, CSS",
      description: "Native mobile chat app developped using React Native. Provide users with chat interface (GiftedChat) and functionality to share images, location, and take photo with device camera.",
      imagePath: `${chatImg}`,
      liveLink: "https://github.com/gcy2312/chat-app",
      gitLink: "https://github.com/gcy2312/chat-app",
    },
    {
      title: "RESTful API",
      subtitle: "MongoDB, ReactJS, Node, Express",
      description: "Server-side programming for myFlix app. Built using MERN stack (MongoDB, Express, ReactJS, Node.js), and deployed using Heroku.",
      imagePath: `${apiImg}`,
      liveLink: "https://myflix-movie-api-2312.herokuapp.com/",
      gitLink: "https://github.com/gcy2312/myFlix",
    },

  ]

  return (
    <div class="container" id="Work">
      <Typography variant="h3">Work</Typography>
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
    </div>
  )
}

function Item(props) {
  return (
    <Row className="justify-content-center">
      <Col md={7}>
        <img
          className="d-block w-100"
          src={props.item.imagePath}
          alt="Images of projects"
          width="auto"
          height="300px"
        />
      </Col>
      <Col md={5}>
        <Typography variant="h4">{props.item.title}</Typography>

        <Typography variant="subtitle2"> {props.item.subtitle} </Typography>

        <Typography id="project-desc" variant="body1">{props.item.description}</Typography>

        <div className="project-links">
          <Button variant="contained" color="primary" href={props.item.gitLink}>GitHub</Button>
          <Button variant="contained" color="primary" href={props.item.liveLink}>Live project</Button>
        </div>

      </Col>
    </Row>

  )
}

export default Work;