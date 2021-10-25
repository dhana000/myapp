import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { device } from "../../styles/devices";
import { categories } from "../../data/data";

function Category() {
  return (
    <Div>
      <Header>Top categories</Header>
      <Container>
        {categories.map((item) => {
          return (
            <CategoryItem key={item.id} src={item.image} title={item.title} />
          );
        })}
      </Container>
    </Div>
  );
}

const Header = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.onBackground};
  line-height: 2.25rem;
  margin-bottom: 2rem;
  font-weight: 800;
  margin-right: 1.5rem;
  margin-left: 1em;

  @media ${device.tablet} {
    margin-left: 0em;
  }
`;

const Container = styled.div`
  height: 17.125rem;
  width: 100%;
  padding: 0.25em 2em 0.5em;
  scroll-snap-type: x mandatory;
  display: grid;
  grid-auto-flow: column;
  overflow: auto;
  gap: 0.75rem;

  @media ${device.tablet} {
    padding: 0em;
  }

  @media ${device.desktop} {
    padding-left: 0.5em;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Div = styled.div`
  @media ${device.tablet} {
    max-width: 760px;
    margin: 2.5em auto;
  }
  @media ${device.desktop} {
    max-width: 1100px;
  }
`;
export default Category;
