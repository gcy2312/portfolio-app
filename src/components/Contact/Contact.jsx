import React from "react";
import { TextField, InputAdornment, Button, ButtonGroup, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { init } from 'emailjs-com';

import emailjs from 'emailjs-com';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, AlternateEmail, Message, Phone, Subject } from '@material-ui/icons';
import { Row, Col } from 'react-bootstrap';

import logoImg from '../../assets/logoDark700.png';

import './contact.css'
init("user_AG0ULrLC9DyJpSyTnnKNn");


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
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { name, email, telephone, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        telephone,
        subject,
        message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  return (
    <div id="Contact" className="contact">
      <div class="container">
        <img id="logoImg" src={logoImg}></img>
        <Typography id="contact-header" >CONTACT</Typography>
        <Row className="justify-content-md-center">

          <Col md={8}>

            <form id="form" className={classes.root} noValidate autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}

            // action="https://formspree.io/f/mzbywgln"
            //   method="POST"
            >
              <TextField id="form-input"
                required
                name="name" type="text"
                {...register('name', {
                  required: { value: true, message: 'Please enter your name' },
                  maxLength: {
                    value: 30,
                    message: 'Please use 30 characters or less'
                  }
                })}
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
              />{errors.name && <span className='errorMessage'>{errors.name.message}</span>}

              <TextField id="form-input"
                required
                name="email" type="email"
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
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
              />{errors.email && (
                <span className='errorMessage'>Please enter a valid email address</span>
              )}

              <TextField id="form-input"
                label="Phone"
                name="phone" type="tel"
                {...register('telephone', {
                  required: false,
                })}
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
                name="subject" type="text"
                {...register('subject', {
                  required: { value: true, message: 'Please enter a subject' },
                  maxLength: {
                    value: 75,
                    message: 'Subject cannot exceed 75 characters'
                  }
                })}
                defaultValue=""
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Subject />
                    </InputAdornment>
                  ),
                }}
              />{errors.subject && (
                <span className='errorMessage'>{errors.subject.message}</span>
              )}

              <TextField id="form-message"
                required
                name="message" type="text"
                {...register('message', {
                  required: true
                })}
                label="Message"
                style={{ margin: 8 }}
                multiline
                rows={4}
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
              /> {errors.message && <span className='errorMessage'>Please enter a message</span>}

              {/* <Button size="block" type="submit">Submit form</Button> */}
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                fullWidth="true"
                style={{ width: 600 }}>
                <Button id="formBtn" type="submit">Send Message</Button>
              </ButtonGroup>

              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                fullWidth="true"
                href="files.cv.pdf"
                download
                target="_blank"
                style={{ width: 600 }}>
                <Button id="formBtn">Download CV</Button>
              </ButtonGroup>
            </form>
            <ToastContainer />

          </Col>
        </Row>
      </div>
    </div >
  );
}

export default Contact;