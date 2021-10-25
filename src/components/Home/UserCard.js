import React from "react";
import { AiFillStar, AiFillVideoCamera } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/devices";

function UserCard({ name, userName, src, bio }) {
  return (
    <Container>
      <div>
        <Header>
          <img src={src} />
          <div>
            <p className="name">{name}</p>
            <p className="username">{userName}</p>
          </div>
        </Header>
        <Detail>
          <p>
            <span>
              <AiFillStar />
            </span>
            48 reviews
          </p>
          <p>
            <span>
              <AiFillVideoCamera />
            </span>
            23 sessions hosted
          </p>
        </Detail>
        <Info>{bio}</Info>
      </div>
    </Container>
  );
}

const Container = styled(Link)`
  scroll-snap-align: center;
  @media ${device.tablet} {
    scroll-snap-align: start;
  }
  padding: 1em;
  border-radius: 1rem;
  color: ${(props) => props.theme.onBackground};
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.border};

  @media ${device.desktop} {
    scroll-snap-align: start;
  }

  & > div {
    width: 13rem;

    @media ${device.tablet} {
      width: 18.9rem;
    }

    @media ${device.desktop} {
      width: 14.3rem;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  img {
    width: 2.2rem;
    height: 2.2rem;
    object-fit: cover;
    object-position: center;
    border-radius: 2rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 0.6em;
  }

  .name {
    font-size: 1rem;
  }
  .username {
    font-size: 0.875rem;
    color: ${(props) => props.theme.onSecondary};
  }
`;

const Info = styled.p`
  font-size: 1rem;
  padding-top: 0.5em;
  line-height: 1.4rem;
`;

const Detail = styled.div`
  p {
    margin-bottom: 0.5em;

    span {
      color: ${(props) => props.theme.primary};
      margin: 0em 0.5em;
    }
  }
`;
export default UserCard;
