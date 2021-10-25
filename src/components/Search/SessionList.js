import React from "react";
import styled from "styled-components";
import Session from "../Session";
import { sessions, exploreSession } from "../../data/data";
import Title from "../Title";

const Container = styled.div`
  margin: auto;
  padding: 0em 2em;
`;

function SessionList(props) {
  return (
    <Container>
      {sessions.map((item) => {
        return (
          <Session
            width={"100%"}
            height={"10rem"}
            padding={"0em"}
            titleWidth={"100%"}
            key={item.id}
            src={item.image}
            ratings={item.ratings}
            reviews={item.reviews}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </Container>
  );
}

export default SessionList;
