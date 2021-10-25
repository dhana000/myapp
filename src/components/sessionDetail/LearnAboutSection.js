import React from "react";
import SubTitle from "../SubTitle";
import styled from "styled-components";

function LearnAboutSection() {
  return (
    <Container>
      <SubTitle>What You Learn</SubTitle>
      <p>
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and more detail
      </p>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid ${(props) => props.theme.border};

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weigt: 400;
    word-break: break-word;
  }
`;
export default LearnAboutSection;
