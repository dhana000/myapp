import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { device } from "../styles/devices";
import styled from "styled-components";

function PrevNextBtns({ next, prev }) {
  return (
    <ButtonContainer>
      <button onClick={next}>
        <AiOutlineLeft className="prev" />
      </button>
      <button onClick={prev}>
        <AiOutlineLeft className="next" />
      </button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
   display: none;

  @media ${device.tablet} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 5rem;
    }

    button {
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 3rem;
      border: 1px solid ${(props) => props.theme.border};
      background: ${(props) => props.theme.background};
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
    }

    .next {
      font-size: 1rem;
      transform: rotate(180deg);
    }
    .prev {
      font-size: 1rem;
    }
    button:hover {
      .next,
      .prev {
        stroke-width: 30;
      }
    }
  }
`;
export default PrevNextBtns;
