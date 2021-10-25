import React from "react";
import styled from "styled-components";
import { device } from "../../styles/devices";

function Poster({ title, info, src }) {
  return (
    <Container>
      <Block>
        <ImgContainer>
          <Img src={src} />
        </ImgContainer>
        <Section>
          <div>
            <Header>{title}</Header>
            <Info>{info}</Info>
            <Button>Learn More</Button>
          </div>
        </Section>
      </Block>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 1.5em;
  color: ${(props) => props.theme.background};
  @media ${device.tablet} {
    padding: 0em;
  }
`;
const Block = styled.div`
  background: ${(props) => props.theme.onBackground};
  border-radius: 1rem;
  @media ${device.tablet} {
    max-width: 760px;
    margin: auto;
    display: flex;
    border-radius: 1.5rem;
    height: 20rem;
  }
  @media ${device.desktop} {
    max-width: 1100px;
    height: 21rem;
  }
`;

const ImgContainer = styled.div`
  margin-bottom: 0.5em;
  height: 14rem;

  @media ${device.tablet} {
    border-radius: 1.5rem 0rem 0rem 1.5rem;
    width: 50rem;
    height: 100%;
    margin-bottom: 0em;
  }
  @media ${device.desktop} {
    border-radius: 1.5rem 0rem 0rem 1.5rem;
    width: 50rem;
    height: 100%;
  }
`;

const Img = styled.img`
  border-radius: 1rem 1rem 0rem 0rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  @media ${device.tablet} {
    border-radius: 1.5rem 0rem 0rem 1.5rem;
  }
`;

const Section = styled.section`
  padding: 2rem;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${device.desktop} {
    padding-left: 6rem;
  }
`;

const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.2em;
  @media ${device.desktop} {
    font-size: 2rem;
    margin-bottom: 0.4em;
  }
`;
const Info = styled.p`
  margin-bottom: 1.5rem;
  width: 90%;
  @media ${device.desktop} {
    width: 60%;
  }
`;

const Button = styled.button`
  padding: 0.7em 0.8em;
  border-radius: 7px;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.onBackground};
`;

export default Poster;
