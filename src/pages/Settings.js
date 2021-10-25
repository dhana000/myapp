import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import { device } from "../styles/devices";
import HeaderNav from "../components/Navigation/HeaderNav";
import BackBtn from "../components/BackBtn";

function Settings() {
  const { url } = useRouteMatch();
  return (
    <Container>
      <HeaderNav left={() => <BackBtn to={"/profile"} />} />
      <Block>
        <h1>Settings</h1>
        <div className="list-container">
          <StyledLink to={`${url}/editProfile`}>Edit Profile</StyledLink>
          <StyledLink to={`${url}/payments`}>Payments</StyledLink>
          <StyledLink to={`${url}/security`}>Security</StyledLink>
        </div>
      </Block>
      <h3 className="logout">Log Out</h3>
    </Container>
  );
}

export default Settings;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: ${(props) => props.theme.background};
  margin-top: 4rem;

  @media ${device.tablet} {
    position: relative;
    z-index: 1;
    max-width: 700px;
    margin: auto;
    margin-top: 4rem;
  }

  @media ${device.desktop} {
    max-width: 1100px;
  }

  .list-container {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    @media ${device.tablet} {
      width: 50%;
    }
    @media ${device.desktop} {
      width: 32%;
    }
  }
  .logout {
    padding: 1.5em;
    padding-top: 0em;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Block = styled.div`
  padding: 1.5em;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.onBackground};
  font-size: 1rem;
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.onBackground};
  margin: .5em 0em .5em;
  padding: 1em;
  border-radius: .5em;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.onBackground};
    color: ${(props) => props.theme.background};
  }
  }
`;
