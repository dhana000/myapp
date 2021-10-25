import React from "react";
import styled from "styled-components";
import Rating from "../../components/Rating";
import { device } from "../../styles/devices";

function BuyButton({ handleBuy, showModal }) {
  return (
    <>
      <BottomBtn>
        <div className="block">
          <p className="price">&#8377; 200 /session</p>
          <Rating size={"0.875"} />
        </div>
        <button onClick={handleBuy}>
          {showModal ? "Proceed" : "Learn It"}
        </button>
      </BottomBtn>
    </>
  );
}

const BottomBtn = styled.div`
  height: 4rem;
  background: ${(props) => props.theme.background};
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 200;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    display: none;
  }

  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .price {
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 0.3em;
  }
  button {
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
    font-weight: bold;
    font-size: 1rem;
  }
`;

export default BuyButton;
