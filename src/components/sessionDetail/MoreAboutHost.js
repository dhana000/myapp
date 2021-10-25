import React from "react";
import { AiFillStar, AiFillLike } from "react-icons/ai";
import styled from "styled-components";
import { sessionDetail } from "../../data/data";
import Button from "../Button";
function MoreAboutHost() {
  return (
    <HostContainer>
      <Title>More About {sessionDetail.hostBy}</Title>
      <p>Joined in Novmber 12</p>
      <div>
        <img src={sessionDetail.image} />
        <div className="container">
          <div>
            <AiFillLike className="icon" />
            <p>23 Followers</p>
          </div>
          <div>
            <AiFillStar className="icon" />
            <p>234 reviews</p>
          </div>
        </div>
      </div>
      <p className="bio">
        J'arrive à Pondicherry en 2012, après avoir passé 14 ans en Italie, 2
        ans en Espagne, 5 ans au Venezuela… read more During your stay In case
        of any help, you can join us very easily. There will be always someone
        close to help you at any time in case of need Languages: English,
        Français, Italiano, Español
      </p>
      <Button to="/santhosh">Santhosh's Profile</Button>
    </HostContainer>
  );
}

const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 0.5em;
  line-height: 2.2rem;
`;

const HostContainer = styled.div`
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid ${(props) => props.theme.border};

  ${Title} {
    line-height: 2rem;
  }

  ${Title} + p {
    margin-top: -0.5em;
    margin-bottom: 1.5em;
    font-size: 1rem;
    color: ${(props) => props.theme.onSecondary};
  }

  img {
    width: 4.5rem;
    height: 4.5rem;
    object-fit: cover;
    object-position: center;
    border-radius: 3rem;
  }

  ${Title} ~ div {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
  }

  .container {
    width: 60%;
  }
  .container > div {
    display: flex;
    padding: 0.5em;
    margin-left: 1em;
  }
  .icon {
    width: 1.2rem;
    height: 1.2rem;
    color: ${(props) => props.theme.primary};
  }
  .icon + p {
    margin-left: 0.6em;
    font-size: 1.05rem;
    font-weight: 500;
  }
  .bio {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 2em;
  }
`;

export default MoreAboutHost;
