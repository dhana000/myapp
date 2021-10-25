import React from "react";
import styled from "styled-components";
import Session from "./Session";
import { sessions, sessionInfo } from "../data/data";
import useCoursel from "../hooks/useCoursel";
import Title from "./Title";
import PrevNextBtns from "./PrevNextBtns";
import { device } from "../styles/devices";

function TitleWithCoursel(props) {
  const { heading, subHeading, size = "1.5rem", array, ...restProps } = props;

  const { ref, ...courselProps } = useCoursel();
  return (
    <Container>
      <div className="header">
        <Title {...{ heading, subHeading, size }} />
        <PrevNextBtns {...courselProps} />
      </div>
      <div className="box" ref={ref}>
        {array.map((item, index) => {
          return (
            <>
              <Session
                {...restProps}
                src={item.image}
                rating={item.ratings}
                reviews={item.reviews}
                title={item.title}
                id={item.id}
                time={item.time ? item.time : null}
                price={item.price ? item.price : null}
              />
              {index + 1 === sessions.length && <Last />}
            </>
          );
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 1em;
  margin-bottom: 1.5em;
  position: relative;

  @media ${device.desktop} {
    padding-top: 2em;
    margin-bottom: 1.5rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box {
    margin-bottom: 1em;
    width: 100%;
    padding: 0.25em 1.5em 0.5em;
    scroll-snap-type: x mandatory;
    display: flex;
    gap: 1em;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    @media ${device.desktop} {
      padding-left: 0em;
      padding-right: 0em;
    }
  }
`;

const Last = styled.div`
  min-width: 1rem;
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.desktop} {
    display: none;
  }
`;

export default TitleWithCoursel;
