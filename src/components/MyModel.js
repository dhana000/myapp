import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { hideModel } from "../redux";
import { device } from "../styles/devices";

function MyModel({ children, heading, right }) {
  const modelStatus = useSelector((state) => state.local.modelStatus);
  const dispatch = useDispatch();

  const closeModal = () => dispatch(hideModel());

  return (
    <Wrapper className={modelStatus ? "active" : ""}>
      <Content>
        <Header>
          <div>
            <button onClick={closeModal}>
              <AiOutlineClose className={"icon"} />
            </button>
          </div>
          <div>
            <p>{heading}</p>
          </div>
          <div>{right}</div>
        </Header>
        <Container>{children}</Container>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: -100%;
  width: 100%;
  height: 100%;
  transition: bottom 0.5s ease-out;
  z-index: 1000;

  &.active {
    bottom: 0;
  }
  @media ${device.tablet} {
    bottom: 0%;
    display: none;
    background: rgba(0, 0, 0, 0.3);
    &.active {
      display: block;
    }
  }
`;

const Content = styled.div`
  position: relative;
  @media ${device.tablet} {
    position: absolute;
    border-radius: 1rem;
    background: ${(props) => props.theme.background};
    width: 44rem;
    left: calc(50% - 22rem);
    top: 3.7rem;
    bottom: 3.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Header = styled.div`
  padding: 0em 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.4rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.background};
  z-index: 100;

  @media ${device.tablet} {
    border-radius: 1rem 1rem 0rem 0rem;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 1rem;
    text-align: center;
  }

  button {
    border-radius: 50%;
    border: none;
    outline: none;
    height: 2rem;
    background: none;
    cursor: pointer;
  }

  .icon {
    font-size: 1.1rem;
    stroke-width: 10;
  }

  @media ${device.tablet} {
    button {
      width: 2rem;
      padding-right: 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: ${(props) => props.theme.shadow};
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
  overflow: auto;
  background: ${(props) => props.theme.background};

  ::-webkit-scrollbar {
    width: 6px;
  }

  @media ${device.tablet} {
    height: 100%;
    background: none;
  }
`;

export default MyModel;
