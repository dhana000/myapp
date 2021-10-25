import React from "react";
import styled from "styled-components";
import HeaderNav from "../components/Navigation/HeaderNav";
import NotificationItem from "../components/Notifications/NotificationItem";
import Title from "../components/Title";
import { sessions } from "../data/data";
import { device } from "../styles/devices";

function Notifications() {
  return (
    <MainContainer>
      <div className="wrapper">
        <Title size="1.8rem" heading={`Notifications`} className="title" />
        <Container>
          {sessions.map((item) => {
            return (
              <NotificationItem
                key={item.id}
                title={item.title}
                info={item.title}
                timeStamp={"26th May"}
                seen={item.seen}
              />
            );
          })}
        </Container>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;
  background: ${(props) => props.theme.background};

  .title {
    display: none;
  }

  @media ${device.tablet} {
    max-width: 760px;
    margin: 0 auto;
    padding-top: 3rem;
    padding-bottom: 0em;

    .title {
      display: block;
    }

    .wrapper {
      padding: 3rem;
      padding-bottom: 0em;
    }
  }
  @media ${device.desktop} {
    max-width: 900px;
    margin: auto;
  }
`;
const Container = styled.div`
  padding: 2em;
  border-radius: 1em;

  @media ${device.tablet} {
    margin-top: 2em;
    overflow: auto;
    padding: 0em;
    box-shadow: 0px 0px 5px 6px rgba(0, 0, 0, 0.05);
    height: 65vh;
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.primary};
    }
  }
  @media ${device.desktop} {
    padding: 0em;
  }
`;

export default Notifications;
