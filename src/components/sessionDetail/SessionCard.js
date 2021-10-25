import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Rating from "../Rating";
import styled from "styled-components";
import { device } from "../../styles/devices";

function SessionCard() {
  return (
    <Container className="active">
      <div>
        <div className="header">
          <div className="price-container">
            <p>$45 </p>
            <p>/ session</p>
          </div>
          <Rating />
        </div>
        <div className="selection-container">
          <p>Select Time Slot</p>
          <div className="selection-item">
            <div>
              <p>12pm-1pm</p>
              <p>Afternoon</p>
            </div>
            <AiOutlineCheckCircle className="icon" />
          </div>
          <div className="selection-item">
            <div>
              <p>12pm-1pm</p>
              <p>Afternoon</p>
            </div>
            <AiOutlineCheckCircle className="icon" />
          </div>
          <div className="selection-item">
            <div>
              <p>12pm-1pm</p>
              <p>Afternoon</p>
            </div>
            <AiOutlineCheckCircle className="icon" />
          </div>
        </div>
        <button className="button">Buy It Now</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: none;
    @media ${device.tablet} {
      display: block;
      width: 40%;
      padding: 1.5em;
      position: relative;

      & > div {
        width: 100%;
        background: ${(props) => props.theme.background};
        position: sticky;
        top: 8rem;
        border-radius: 1rem;
        border: 1px solid ${(props) => props.theme.border};
        box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.05);
        padding: 1.5em;
        margin-bottom: 1.5em;
      }

      .header {
        margin-bottom: 0.8em;

        @media ${device.desktop} {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }

      .price-container {
        display: flex;
        align-items: center;
        margin-bottom: 0.5em;
        p:first-child {
          font-size: 1.5rem;
          font-weight: 600;
          margin-right: 0.125rem;
        }
        p:last-child {
          font-size: 1rem;
          color: ${(props) => props.theme.onSecondary};
        }
      }
      }

      .selection-container {
        width: 100%;
        padding-top: 0.5em;
        border: 1px solid ${(props) => props.theme.border};
        border-radius: 1rem;
        margin-bottom: 1.1em;

        & > p {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.2em 0.6em;
        }
      }

      .selection-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8em;
        border-radius: 1rem;
        border-bottom: 1px solid ${(props) => props.theme.border};
        p:first-child {
          font-weight: 400;
          line-height: 1.7rem;
          font-size: 1rem;
        }
        p:last-child {
          font-size: 0.875rem;
        }

        .icon {
          font-size: 1.3rem;
        }
      }

      .button {
        width: 100%;
        height: 3rem;
        text-align: center;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        cursor: pointer;
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.background};
        font-size: 1rem;
        font-weight: 600;
      }
    }
`;

export default SessionCard;
