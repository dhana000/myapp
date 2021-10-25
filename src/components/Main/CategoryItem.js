import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 14rem;
  height: 14rem;

  img {
    display: inline-block;
    width: 14rem;
    height: 12rem;
    margin-right: 1em;
    object-fit: cover;
    object-position: center;
    border-radius: 0.625rem;
    scroll-snap-align: center;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.onBackground};
    line-height: 1.375rem;
    font-weight: 600;
  }
`;

function CategoryItem({ src, title }) {
  return (
    <Container>
      <img src={src} />
      <p>{title}</p>
    </Container>
  );
}

export default CategoryItem;
