import React from "react";
import styled from "styled-components";
import { device } from "../../styles/devices";

function Hero({ title, subTitle, src }) {
  return (
    <Container>
      <img src={src} />
      <Section>
        <Logo>
          <h1>LearnIt.</h1>
        </Logo>
        <Block>
          <CenterBlock>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <button>Try it out</button>
          </CenterBlock>
        </Block>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  color: ${(props) => props.theme.background};

  img {
    position: absolute;
    left: 0;
    right: 0;
    z-index: -10;
    width: 100%;
    height: 80vh;
    object-fit: cover;
    object-position: top;
    margin-bottom: 2.25em;
  }
`;

const Section = styled.div`
  height: 80vh;
  width: 100%;
  margin-bottom: 3em;
  position: relative;
  color: ${(props) => props.theme.onBackground};
`;

const Block = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  text-align: left;
`;

const CenterBlock = styled.div`
  padding: 1.5em;

  button {
    padding: 0.8em 1.4em;
    background: ${(props) => props.theme.onBackground};
    border: none;
    outline: none;
    border-radius: 0.7rem;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(props) => props.theme.background};
  }

  @media ${device.tablet} {
    max-width: 760px;
    padding: 1.5em 0em;
    margin: auto;
  }
  @media ${device.desktop} {
    max-width: 1100px;
    padding: 1.5em 0em;
    margin: auto;
  }
`;

const Title = styled.h1`
  font-family: roboto;
  font-size: 2.4rem;
  width: 80%;
  line-height: 2.2rem;
  margin-bottom: 0.2em;
  font-weight: 900;
  @media ${device.tablet} {
    font-size: 3rem;
    line-height: 2.4rem;
    width: 30%;
  }
  @media ${device.desktop} {
    font-size: 3.2rem;
    line-height: 2.6rem;
    width: 30%;
  }
`;

const SubTitle = styled.p`
  font-size: 1rem;
  width: 80%;
  margin-bottom: 0.8em;
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.tablet} {
    width: 30%;
  }
`;

const Logo = styled.div`
  text-align: left;
  padding: 2em;

  @media ${device.tablet} {
    display: none;
  }

  h1 {
    font-size: 1.7rem;
  }
`;
export default Hero;
