import React from "react";
import { TextField, InputAdornment, Button, ButtonGroup, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, AlternateEmail, Message, Phone, Subject } from '@material-ui/icons';
import { Row, Col } from 'react-bootstrap';

import logoImg from '../../assets/logoDark700.png';

import './contact.css'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));


function Contact() {
  const classes = useStyles();
  return (
    <div id="Contact" className="contact">
      <div class="container">
        <img id="logoImg" src={logoImg}></img>
        <Typography id="contact-header" >CONTACT</Typography>
        <Row className="justify-content-md-center">

          <Col md={8}>

            <form id="form" className={classes.root} noValidate autoComplete="off">
              <TextField id="form-input"
                required
                label="Name"
                defaultValue=""
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField id="form-input"
                required
                label="Email"
                defaultValue=""
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmail />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField id="form-input"
                label="Phone"
                defaultValue=""
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField id="form-input"
                label="Subject"
                defaultValue=""
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Subject />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField id="form-message"
                required
                label="Message"
                style={{ margin: 8 }}
                multiline
                rows={5}
                style={{ width: 600 }}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Message />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue=""
                variant="outlined"
              />

              {/* <Button size="block" type="submit">Submit form</Button> */}
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                fullWidth="true"
                style={{ width: 600 }}>
                <Button id="formBtn">Send Message</Button>
              </ButtonGroup>
            </form>

          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;