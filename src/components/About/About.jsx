import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";
import ScrollAnimation from 'react-animate-on-scroll';

const SlideInRightAnimation = keyframes`${slideInRight}`;
const SlideInRightDiv = styled.div
  `animation: 3s ${SlideInRightAnimation};`;

function About() {
  return (
    <div id="About" className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <SlideInRightDiv>
              <h1 class="font-weight-light">About</h1>
            </SlideInRightDiv>
            <ScrollAnimation animateIn="fadeIn">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;