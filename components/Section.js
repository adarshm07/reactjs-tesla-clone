import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage={ backgroundImg }>
      <Fade bottom>
        <ItemText>
          <h1>{ title }</h1>
          <p>{ description }</p>
        </ItemText>
      </Fade>
      <Button>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{ leftBtnText }</LeftButton>
            { rightBtnText &&
              <RightButton>{ rightBtnText }</RightButton>
            }
          </ButtonGroup>
        </Fade>
      <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical alignment
  align-items: center;
  z-index: 1;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
  z-index: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled.div`
  background-color: #ffffff;
  height: 40px;
  width: 256px;
  color: #020202;
  opacity: 0.65;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  margin: 8px;
`;

const DownArrow = styled.img`
  margin: 20px auto;
  width: 100%;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Button = styled.div`

`;
