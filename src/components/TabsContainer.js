import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { device } from "../styles/devices";

function TabsContainer({ heading, tabsArray, contentArray }) {
  const [activeTab, setActiveTab] = useState(0);
  const nodeRef = useRef();

  useEffect(() => {
    nodeRef.current.childNodes[0].classList.add("active");
  }, []);

  const handleTab = (e) => {
    const tabIndex = parseInt(
      e.target.attributes.getNamedItem("data-id").value
    );
    const elementsList = nodeRef.current.childNodes;
    elementsList.forEach((elem, index) => {
      if (tabIndex === index) {
        window.scrollTo({ top: 0, left: 0 });
        setActiveTab(index);
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
    });
  };

  return (
    <Container>
      <Header>
        {heading && <h1>{heading}</h1>}
        <Content ref={nodeRef}>
          {tabsArray.map((tab, index) => {
            return (
              <Tab
                key={tab}
                data-id={index}
                children={tab}
                onClick={handleTab}
              />
            );
          })}
        </Content>
      </Header>
      <ContentContainer>
        {contentArray.filter((_, index) => index === activeTab)}
      </ContentContainer>
      {contentArray.length === 0 && <p>No Session Yet</p>}
    </Container>
  );
}

const Container = styled.div`
  padding: 1.5rem;
  position: relative;
  @media ${device.tablet} {
    max-width: 760px;
    margin: auto;
    padding-top: 5rem;
  }
  @media ${device.desktop} {
    max-width: 1100px;
    padding: 0;
    padding-top: 5rem;
    h1 {
      margin-bottom: 1.5rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

const Tab = styled.div`
  padding: 0.7em;
  margin-right: 1.5rem;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid black;
    font-weight: 600;
  }
  &:hover {
    background: ${(props) => props.theme.shadow};
  }
`;

const Header = styled.div`
  background: ${(props) => props.theme.background};
  position: fixed;
  padding: 1.5rem;
  padding-bottom: 0rem;
  top: 0;
  right: 0;
  left: 0;
  h1 {
    margin-bottom: 0.6rem;
  }
  @media ${device.tablet} {
    top: 4rem;
    margin: auto;
    width: 760px;
  }
  @media ${device.desktop} {
    top: 4rem;
    width: 1100px;
  }
`;

const ContentContainer = styled.div`
  margin-top: 6.6rem;
  margin-bottom: 3rem;
  @media ${device.tablet} {
    margin-top: 8.5rem;
  }
`;

export default TabsContainer;
