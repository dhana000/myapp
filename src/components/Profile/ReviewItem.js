import React from "react";
import styled from "styled-components";

function ReviewItem({ src, time, review, name }) {
  return (
    <Container>
      <img {...{ src }} />
      <div>
        <p>{name}</p>
        <p>{time}</p>
        <p>{review}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.7em 0em;

  img {
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  & > div {
    margin-left: 1.5em;
    width: 70%;
  }
  div > p:first-child {
    font-size: 1.05rem;
    font-weight: 600;
  }
  div > p:nth-of-type(2) {
    font-size: 0.875rem;
    color: ${(props) => props.theme.onSecondary};
    margin-bottom: 0.4rem;
  }
  div > p:nth-of-type(3) {
    font-size: 1rem;
    color: ${(props) => props.theme.onBackground};
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export default ReviewItem;
