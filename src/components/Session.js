import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import styled from "styled-components";
import Rating from "./Rating";
import { device } from "../styles/devices";
import { Link } from "react-router-dom";

const Container = styled.div`
  scroll-snap-align: center;
  @media ${device.tablet} {
    scroll-snap-align: start;
  }
  @media ${device.desktop} {
    scroll-snap-align: start;
  }
  img {
    display: inline-block;
    width: ${(props) => (props.width ? props.width : "13rem")};
    height: ${(props) => (props.height ? props.height : "9rem")};
    background: ${(props) => props.theme.border};
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;

    @media ${device.tablet} {
      width: ${(props) => (props.tWdith ? props.tWdith : "13.7rem")};
      height: ${(props) => (props.tHeight ? props.tHeight : "9rem")};
    }

    @media ${device.desktop} {
      width: ${(props) => (props.dWidth ? props.dWidth : "16.4rem")};
      height: ${(props) => (props.dHeight ? props.dHeight : "11rem")};
    }
  }
`;

const Clock = styled(AiFillClockCircle)`
  color: ${(props) => props.theme.primary};
  font-size: 0.9rem;
  margin-right: 0.25em;
`;

const RatingContainer = styled.div`
  display: flex;
  padding-top: 0.5em;
  padding-bottom: 0.1em;
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2em;

  strong {
    font-weight: 600;
  }
`;

const Title = styled.p`
  margin: 0.2em 0em;
  font-size: 1rem;
  line-height: 1.5;
  width: ${(props) => props.titleWidth};
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.p`
  margin: 0.3em 0em;
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 0.25em;
`;

function Session(props) {
  const {
    titleWidth,
    ratings,
    reviews,
    title,
    price,
    time,
    id,
    src,
    ...restProps
  } = props;
  return (
    <Container {...restProps}>
      <Link to={`/session/${id}`}>
        <img {...{ src }} alt="" />
      </Link>
      {time && (
        <TimeContainer>
          <Clock />
          <p>
            <strong>{time} min</strong> to start
          </p>
        </TimeContainer>
      )}

      {ratings && (
        <RatingContainer>
          <Rating size={0.9} />
        </RatingContainer>
      )}

      <Title titleWidth={titleWidth ? titleWidth : "90%"}>{title}</Title>

      {price && (
        <PriceContainer>
          <Price>&#8377;{price}&#47;</Price>
          <p>session</p>
        </PriceContainer>
      )}
    </Container>
  );
}

export default Session;
