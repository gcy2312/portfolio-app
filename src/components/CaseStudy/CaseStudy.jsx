
import React from 'react';
import { Typography, Card, Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';

import mainView from '../../assets/CShome.png';
import profileView from '../../assets/CSprofile.png';
import postmanView from '../../assets/CSpostmanuser.png';
import codeView from '../../assets/CScode.png';
import updateProfile from '../../assets/CSupdateprofile.png';
import genreView from '../../assets/CDgenre.png';

import './caseStudy.css';

function CaseStudy() {

  return (
    <div className="overflow-auto" id="caseStudy-container">

      <Typography id="projectOverviewHeader">Project Overview</Typography>
      <Row className="justify-content-center">
        <Col md={6} className="CSpurpose">
          <Typography id="CSsubheader">Purpose</Typography>
          <p>myFlix web app was developed using MEAN
            stack to provide users with IMDB functionality.
            Users are given access to information on movies,
            genres, directors, as well as ability to create an
            account, update personal data and create a list
            of favorite movies.</p>
          <Typography id="CSsubheader">Context</Typography>
          <p>myFlix was built as part of the Web Development
            course at CareerFoundry. The purpose of this app
            was to demonstrate mastery of full-stack
            JavaScript development.
          </p>
          <Typography id="CSsubheader">Objective</Typography>
          <p>The goal of this development was to incorporate
            an ambitious full-stack project to professional
            portfolio. Additionally, to build a complete
            sever-side and client-side for an app from the
            ground up.
          </p>
        </Col>
        <Col className="CSpurposePhotos" md={6}>
          <img className="CSimages" alt="myFlix homepage" src={mainView} width='80%'></img>
          <br />
          <img className="CSimages" alt="myFlix profile page" src={profileView} width='80%'></img>
        </Col>
      </Row>

      <Typography id="projectPlanHeader">Project Plan</Typography>
      <Row className="justfy-content-center">
        <Col id="CSprojectPhotos" md={6}>
          <img className="CSimages" alt="myFlix back-end Postman" src={postmanView} width='80%'></img>
          <img className="CSimages" src={codeView} alt="myFlix back-end code" width='80%'></img>
        </Col>
        <Col md={6} className="CSprojectplan">
          <Typography id="CSsubheader">Server-Side</Typography>
          <ul>
            <li>
              Built RESTful  API using Node.js and
              Express, which interacts with non-relational database (MongoDB)
            </li>
            <li>API is accessed via HTTP methods (GET, PUT, POST, DELETE), and CRUD operations are used to retrieve and store data
            </li>
            <li>
              Movie and user data is stored in JSON format
            </li>
            <li>
              Endpoints were tested using Postman
            </li>
            <li>
              Authentication and authorization incorporated via HTTP and JWT authentication
            </li>
            <li>
              In beginning of development client-side, an additional endpoint was added (GET /user/:Username) in order to display user data and not simply to edit personal data or add/remove movie from Favorites list
            </li>
          </ul>
          <Button id="linkBtn" variant="contained" href="https://myflix-movie-api-2312.herokuapp.com/documentation.html" target="_blank">API Endpoint Documentation</Button>

        </Col>
      </Row>
      <br />
      <Row className="justfy-content-center">
        <Col id="CSprojectclient" md={12}>
          <Typography id="CSsubheader">Client-Side</Typography>
          <ul>
            <li>Single-page responsive app developed with Angular and TypeScript
            </li>
            <li>User interface integrated necessary functions in order to interact with API and send/receive appropriate responses
            </li>
            <li>Interface views include: Movie List View (list of all movies), Movie Card View (details of a single movie), Genre View (details of a single genre), Director View (details of a single director), Profile View (user personal details and list of favorite movies), Login View, and Registration View
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <img className="CSimages" alt="myFlix update profile view" src={updateProfile} width='40%'></img>
        <img className="CSimages" alt="myFlix genre view" src={genreView} width='40%'></img>
      </Row>
      <br />
      <Row className="justify-content-center" id="phase-container">
        <Col md={4}>
          <Card id="card">
            <Typography id="phaseHeader">Phase 1</Typography>
            <ul>
              <li>Determine project scope and requirements</li>
              <li>Determine necessary Endpoints and Schemas for server-side</li>
              <li>Create documentation for API endpoints (request and response format)</li>
              <li>Create NoSQL database using MongoDB</li>
              <li>Add authentication (login)</li>
              <li>Test endpoints in Postman</li>
              <li>Upload and host database using Heroku</li>
            </ul>
          </Card>
        </Col>
        <Col md={4}>
          <Card id="card">
            <Typography id="phaseHeader">Phase 2</Typography>
            <ul>
              <li>Acquire and become efficient with TypeScript</li>
              <li>Create service file in Angular and implement logic for all API endpoints</li>
              <li>Incorporate NgModule and RouterModule for internal app routing
              </li>
              <li>Implement Angular's router for routes to Welcome View, MovieCard View and Profile View</li>
            </ul>
          </Card>
        </Col>
        <Col md={4}>
          <Card id="card">
            <Typography id="phaseHeader">Phase 3</Typography>
            <ul>
              <li>Create Welcome, Login, and Register page as well as corresponding logic</li>
              <li>Create MovieCard View with links to Director and Genre</li>
              <li>Create Profile View with logic for updating user info and displaying Favorites
              </li>
              <li>Add styling using MaterialUI and CSS</li>
              <li>Ensure app is responsive</li>
              <li>Host app using GitHub pages</li>
            </ul>
          </Card>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-center" id="links">
        <Button id="linkBtn" variant="contained" href="https://github.com/gcy2312/myFlix" target="_blank">API GitHub Repo</Button>
        <Button id="linkBtn" variant="contained" href="https://github.com/gcy2312/myFlix-Angular-client" target="_blank">myFlix GitHub Repo</Button>
        <Button id="linkBtn" variant="contained" href="https://gcy2312.github.io/myFlix-Angular-client/welcome" target="_blank">Live Project</Button>
      </Row>
      <br />
      <Row className="justify-content-center" id="CSchallenges">
        <Col md={12}>
          <Typography id="CSchallengesHeader">Challenges</Typography>
          <p>
            While building an API and working with different database structures, becoming familiar and efficient with the Terminal was essential. In developing the client-side, the primary challenges consisted of adapting to TypeScript; learning its uses and differences from JavaScript, in order to achieve desired result. Additionally, using Angular's "types" appropriately and consistently in order to return expected data. In retrospect, adding an additional API endpoint to filter the movies based on user's Favorites list, would have improved efficacy and response time.
            With the help of my course mentor, an experienced developer in the field, the final product was successfully completed, and improved upon the previous client-side user-interface.
          </p>
        </Col>
      </Row>
    </div >

  )
}

export default CaseStudy