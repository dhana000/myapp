import React from "react";
import styled from "styled-components";
import SubTitle from "../SubTitle";

function Bio() {
  return (
    <Contaner>
      <SubTitle>Santhosh's Bio</SubTitle>
      <div>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and
        </p>
      </div>
    </Contaner>
  );
}

const Contaner = styled.div`
  padding: 1em 1.5rem;
  line-height: 1.5rem;
  div {
    padding-bottom: 2em;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }
`;

export default Bio;
