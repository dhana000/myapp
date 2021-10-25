import React from "react";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { device } from "../../styles/devices";

// dummy data

const data = [
  {
    time: "1pm-2pm",
    date: "Today",
  },
  {
    time: "1pm-2pm",
    date: "Tommaro",
  },
  {
    time: "1pm-2pm",
    date: "5/3/2021",
  },
];

function SlideUp({ showModal }) {
  return (
    <Container itemLen={data.length} className={showModal ? "active" : ""}>
      <div className="selection-container">
        <Title>Select Time Slot</Title>
        {data.map((item, index) => {
          return (
            <Block key={index}>
              <div>
                <p>{item.time}</p>
                <p className="date">{item.date}</p>
              </div>
              <AiOutlineCheckCircle className="icon" />
            </Block>
          );
        })}
      </div>
    </Container>
  );
}

const Title = styled.p`
  font-weight: 600;
  margin-bottom: 0.8em;
`;

const Container = styled.div`
  overflow: hidden;
  height: 0;
  &.active {
    height: ${(props) => `${props.itemLen * 115}px`};
    background: white;
    box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 1rem 1rem 0rem 0rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1.5em;
    transition: height 0.5s ease-out;
  }
  @media ${device.tablet} {
    height: 0;
    display: none;
    overflow: hidden;
  }
`;

const Block = styled.div`
  display: flex;
  margin-bottom: 0.4em;
  align-items: center;
  justify-content: space-between;
  padding: 0.7em;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.5rem;

  .icon {
    font-size: 1.2rem;
  }
  .date {
    font-size: 0.875rem;
    margin-top: 0.2em;
  }
`;

export default SlideUp;
