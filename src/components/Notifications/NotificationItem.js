import React from "react";
import styled from "styled-components";
import { AiOutlineAlert, AiOutlineDoubleRight } from "react-icons/ai";
import { device } from "../../styles/devices";

function NotificationItem({ title, info, timeStamp, seen }) {
  return (
    <Container seen={seen}>
      <Title>{title}</Title>
      <Info>{info}</Info>
      <div>
        <AiOutlineAlert className="icon" />
        <TimeStamp>{timeStamp}</TimeStamp>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 2em;
  font-size: 0.875rem;
  background: ${(props) =>
    !props.seen ? props.theme.shadow : props.theme.background};
  border-bottom: 1px solid ${(props) => props.theme.border};

  &:last-child {
    border: none;
    margin-bottom: 0;
  }

  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .icon {
    font-size: 1.2rem;
  }
`;

const Title = styled.p`
  font-size: 1rem;
  margin-bottom: 0.3em;
`;

const Info = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1em;
  color: ${(props) => props.theme.onSecondary};
`;

const TimeStamp = styled.p`
  padding-top: 0.2em;
  font-weight: 600;
`;

export default NotificationItem;
