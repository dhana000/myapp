import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Topics from "../components/Home/Topics";
import UsersList from "../components/Home/UsersList";
import { device } from "../styles/devices";
import HeaderNav from "../components/Navigation/HeaderNav";
import TitleWithCoursel from "../components/TitleWithCoursel";
import { hero, sessions } from "../data/data";

function Home() {
  return (
    <Container>
      <HeaderNav left={Left} right={Right} />
      <Hero>
        <h1>Heyy, Santhosh</h1>
        <p>What do want to Learn today?</p>
      </Hero>
      <Topics />
      <TitleWithCoursel
        heading={`best Session for you`}
        subHeading={`This sessions are ready to start right now`}
        array={sessions}
        width="15rem"
        height="10.1rem"
      />
      <UsersList />
    </Container>
  );
}

const Left = () => {
  return <p style={{ fontSize: "1.3rem", fontWeight: 700 }}>Learn It</p>;
};

const Right = () => {
  return <StyledLink to="/hostsession">Host a session</StyledLink>;
};

const Container = styled.div`
  margin-top: 4em;
  padding-bottom: 5em;
  @media ${device.tablet} {
    max-width: 700px;
    padding-top: 5.5em;
    margin: 0em auto;
  }
  @media ${device.desktop} {
    max-width: 1100px;
    margin: 0em auto;
    padding-top: 5.5em;
  }
`;

const Hero = styled.div`
  margin-bottom: 1.5em;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  h1 {
    width: 40%;
    margin-bottom: 0.1em;
  }
  p {
    color: ${(props) => props.theme.onSecondary};
  }

  @media ${device.tablet} {
    color: white;
    width: 100%;
    padding: 0;
    margin-bottom: 2.5em;
    margin-top: 0.6em;
    border-radius: 1em;
    h1 {
      color: black;
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.onBackground};
`;

export default Home;
