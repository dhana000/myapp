import React from "react";
import styled from "styled-components";
import { topics } from "../../data/data";
import { device } from "../../styles/devices";
import Title from "../Title";

function Topics() {
  return (
    <Main>
      <Title
        className="title"
        heading={"Topics For You"}
        subHeading={"70+ topics for opening new opportunity"}
        size={"1.5rem"}
      />
      <div className="container">
        <div className="grid">
          {topics.map((item) => (
            <Item key={item.id}>
              <span>{item}</span>
            </Item>
          ))}
        </div>
      </div>
    </Main>
  );
}

const Main = styled.div`
  @media ${device.desktop} {
    margin-bottom: 4rem;
  }
  .container {
    padding-left: 1em;
    margin-bottom: 1.5em;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media ${device.tablet} {
      padding-left: 0em;
    }

    @media ${device.desktop} {
      padding-left: 0em;
    }

    & > div {
      width: 1000px;
      display: flex;
      flex-wrap: wrap;

      @media ${device.desktop} {
        width: 1100px;
        background: ;
      }
    }
  }
`;

const Item = styled.div`
  display: inline;
  background: white;
  padding: 0.5em 1em;
  margin: 0.4em;
  border-radius: 2rem;
  border: 1px solid ${(props) => props.theme.border};

  &:hover {
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid white;
    cursor: pointer;
  }
`;

export default Topics;
