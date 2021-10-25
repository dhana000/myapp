import React, { memo } from "react";
import { GrCloudComputer, GrBrush } from "react-icons/gr";
import { FiMusic, FiCamera, FiPercent } from "react-icons/fi";
import { FaRegHdd } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import styled from "styled-components";
import { device } from "../../styles/devices";

const defalutTopics = [
  {
    icon: <GrCloudComputer className="icon" />,
    title: "Coding",
  },
  {
    icon: <GrBrush className="icon" />,
    title: "Art",
  },
  {
    icon: <FiMusic className="icon" />,
    title: "Music",
  },
  {
    icon: <FaRegHdd className="icon" />,
    title: "Web",
  },
  {
    icon: <FiCamera className="icon" />,
    title: "Photography",
  },
  {
    icon: <FiPercent className="icon" />,
    title: "Math",
  },
  {
    icon: <BiRocket className="icon" />,
    title: "Science",
  },
];

function DefaultSearchItem({ hide = false }) {
  return (
    <Container {...{ hide }}>
      <p className="heading">SOME TOPICS</p>
      {defalutTopics.map((item) => {
        return (
          <Block>
            <Icon>{item.icon}</Icon>
            <p>{item.title}</p>
          </Block>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: ${(props) => (props.hide ? "none" : "block")};
  padding: 0em 1em;
  .heading {
    font-size: 0.875rem;
    padding: 1.3rem 0rem;
  }
`;

const Block = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: light;
  padding: 1em 0em;
  background: none;
  outline: none;
  border: none;
  margin-bottom: 0.5em;
  padding-left: 0.2em;

  @media ${device.tablet} {
    width: 20%;
    cursor: pointer;
    padding-right: 1em;
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.onSecondary};
  }
`;

const Icon = styled.div`
  flex-basis: 2rem;
  .icon {
    font-size: 1.4rem;
    margin-right: 0.5em;
  }
`;

export default memo(DefaultSearchItem);
