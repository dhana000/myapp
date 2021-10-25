import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HostASessionForm from "../components/HostSession/HostASessionForm";
import Title from "../components/Title";
import { device } from "../styles/devices";

function HostSession() {
  return (
    <MainContainer>
      <StyledLink to="/"> Cancel</StyledLink>
      <Title
        size="1.4rem"
        heading="Host a session"
        subHeading="Get Ready to find New Oppurinties"
        />
      <Form>
        <HostASessionForm />
      </Form>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin-top: 1.4em;
  position: absolute;
  background: ${props => props.theme.background};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 200;
  @media ${device.tablet} {
    padding-top: 6rem;
    max-width: 760px;
    margin: auto;
    position: relative;
    z-index: 1;
  }
  @media ${device.desktop} {
    max-width: 900px;
    margin: auto;
  }
`;

const Form = styled.div`
  padding: 1em 1.5em;
  background: ${props => props.theme.background};
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.onBackground};
  position: absolute;
  right: 1.5em;
  top: .5em;
  cursor: pointer;

  @media ${device.tablet} {
    top: 6.5em;
    &:hover {
      font-weight: 600;
    }
  }
`

export default HostSession;
