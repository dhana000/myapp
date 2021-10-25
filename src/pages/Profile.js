import React from "react";
import styled from "styled-components";
import Bio from "../components/Profile/Bio";
import Header from "../components/Profile/Header";
import BioList from "../components/Profile/BioList";
import Reviews from "../components/Profile/Reviews";
import HeaderNav from "../components/Navigation/HeaderNav";
import { device } from "../styles/devices";
import MyPhotos from "../components/Profile/MyPhotos";
import TitleWithCoursel from "../components/TitleWithCoursel";
import { sessions } from "../data/data";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

function Profile({navigation}) {
  return (
    <MainContainer>
      <HeaderNav middle={Middle} right={() => <StyledLink to="/account/settings"><Icon/></StyledLink> } />
      <div className="col-1">
        <Header />
      </div>
      <div className="col-2">
        <Bio />
        <BioList />
        <MyPhotos />
        <Hr />
        <TitleWithCoursel
          heading={"Santhosh past sessions"}
          subHeading={"In this sessions are santhosh participated"}
          array={sessions}
          dWidth={"15.3rem"}
        />
        <Hr />
        <Reviews />
      </div>
    </MainContainer>
  );
}

const Middle = () => {
  return <p style={{ fontWeight: 700 }}>Profile</p>;
};

function Hr() {
  return (
    <Container>
      <Line />
    </Container>
  );
}

const MainContainer = styled.div`
  margin-top: 4.2rem;
  margin-bottom: 4rem;

  @media ${device.tablet} {
    position: relative;
    max-width: 700px;
    margin: auto;
    margin-top: 5rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 35% 65%;
  }

  @media ${device.desktop} {
    max-width: 1100px;
    margin: auto;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-gap: 2rem;
  }
`;

const Container = styled.div`
  padding: 1.5em;

  @media ${device.tablet} {
    padding: 0em;
  }
`;

const Line = styled.div`
  height: 0.1rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

const Icon = styled(AiOutlineSetting)`
  width: 2.5rem;
  height: 2.5rem;
  padding-left: 0.7em;
  font-size: 1.4rem;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.onBackground};
`

export default Profile;
