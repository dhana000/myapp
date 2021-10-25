import React from "react";
import { AiOutlineStar, AiOutlineVideoCamera } from "react-icons/ai";
import styled from "styled-components";
import { device } from "../../styles/devices";
import { sessionDetail } from "../../data/data";

function Header() {
  return (
    <Container>
      <div className={"box"}>
        <img src={sessionDetail.image} />
        <p className="name">Hi, I'm Santhosh</p>
        <p className="joined-tag">Joined in 2018</p>
        <IconWraper>
          <span>
            <AiOutlineVideoCamera className="icon" />
          </span>{" "}
          87 sessions hosted
        </IconWraper>
        <IconWraper>
          <span>
            <AiOutlineStar className="icon" />
          </span>{" "}
          345 reviews{" "}
        </IconWraper>
        <button>Follow</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 1.5em;

  @media ${device.tablet} {
    padding: 1.5em;
    margin-top: 1em;
    border-radius: 1rem;
    border: 1px solid ${(props) => props.theme.border};
    position: sticky;
    top: 6rem;
    box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.05);
    max-width: 19rem;
  }

  .box {
    padding-bottom: 2em;
    border-bottom: 1px solid ${(props) => props.theme.border};
    @media ${device.tablet} {
      padding: 0em;
      border: none;
    }
  }

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  .name {
    padding-top: 1em;
    padding-bottom: 0.2em;
    font-size: 1.6rem;
  }
  .joined-tag {
    color: ${(props) => props.theme.onSecondary};
    font-size: 0.875rem;
    margin-bottom: 1.5em;
  }

  button {
    margin-top: 1.5em;
    width: 100%;
    height: 2.8rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.onBackground};
    outline: none;
    background: none;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1em;

    &:hover {
      background: ${(props) => props.theme.onBackground};
      cursor: pointer;
      color: ${(props) => props.theme.background};
    }
  }
`;

const IconWraper = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.6em;
`;

export default Header;
