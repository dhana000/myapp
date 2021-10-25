import React from "react";
import styled from "styled-components";
import { device } from "../styles/devices";
const Container = styled.div`
  margin-top: 4em;
  padding: 0em 1em;
  width: 100%;
  background-color: ${(props) => props.theme.footer};
`;

const Section = styled.section`
  padding-bottom: 1.5em;
  margin: 1.5rem 0em;
  border-bottom: 1px solid ${(props) => props.theme.border};
  border-top: 1px solid ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  @media ${device.desktop} {
    flex-direction: column;
    border: none;
  }
`;

const Header = styled.h4`
  color: ${(p) => p.theme.onBackground};
  text-transform: uppercase;
  font-size: 0.9rem;
  line-height: 2.1rem;
`;

const Item = styled.p`
  display: inline-block;
  text-decoration: none !important;
  color: ${(prop) => prop.theme.onBackground};
  font-size: 1rem;
  line-height: 2.1rem;
`;

const Div = styled.div`
  padding: 0em 1em;
  @media ${device.desktop} {
    max-width: 1280px;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
`;

function Footer() {
  return (
    <Container>
      <Div>
        <Section>
          <Header>Navigation</Header>
          <Item>Home</Item>
          <Item>Search</Item>
          <Item>about</Item>
        </Section>
        <Section>
          <Header>Host</Header>
          <Item>Home</Item>
          <Item>Search</Item>
          <Item>about us</Item>
        </Section>
      </Div>
    </Container>
  );
}

export default Footer;
