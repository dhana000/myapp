import React from "react";
import styled from "styled-components";
import SessionTab from "../components/Session/SessionTab";
import TabsContainer from "../components/TabsContainer";
import { sessions } from "../data/data";
import { device } from "../styles/devices";

const Tab1Content = () => {
  return (
    <Container>
      {sessions.map((item, index) => {
        return (
          <SessionTab
            key={item.id}
            src={item.image}
            title={item.title}
            host={"santhosh"}
            time={item.time}
          />
        );
      })}
    </Container>
  );
};

const tabs = ["Up Comming", "Completed"];
const tabsInfo = [<Tab1Content />, <Tab1Content />];

function Sessions() {
  return (
    <div>
      <TabsContainer
        heading="Sessions"
        tabsArray={tabs}
        contentArray={tabsInfo}
      />
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.desktop} {
    padding-left: 1.2rem;
  }
`;

export default Sessions;
