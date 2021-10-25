import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

function Rating({ size }) {
  return (
    <RatingContainer {...{ size }}>
      <AiFillStar className="icon" />
      <p>{4.6}</p>
      <p>(345 reviews)</p>
    </RatingContainer>
  );
}

const RatingContainer = styled.div`
  display: flex;
  align-items: center;

  .icon,
  p:nth-of-type(1),
  p:nth-of-type(2) {
    font-size: ${(props) => (props.size ? `${props.size}rem` : "1rem")};
    margin-right: 0.2em;
  }

  .icon {
    display: block;
    color: ${(props) => props.theme.primary};
    font-size: ${(props) => (props.size ? `${props.size * 1.1}rem` : "1rem")};
  }

  p:nth-of-type(1) {
    font-weight: 600;
  }

  p:nth-of-typt(2) {
    color: ${(props) => props.theme.onSecondary};
  }
`;
export default Rating;
