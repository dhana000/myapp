import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import { users } from "../../data/data";
import Title from "../Title";
import useCoursel from "../../hooks/useCoursel";
import { device } from "../../styles/devices";
import PrevNextBtns from "../PrevNextBtns";

const bio_dummy = `scrambled it type specimen bacted by the readable  to make a type specimen bacted by the readable content of a page when umour and the like).
`;

function UsersList() {
  const { ref, prev, next } = useCoursel();

  return (
    <Container>
      <div className="header">
        <Title
          size={"1.5rem"}
          heading={"Super Learners"}
          subHeading={"Check out best learners profiles"}
        />
        <PrevNextBtns {...{ prev, next }} />
      </div>
      <div className="box" ref={ref}>
        {users.map((item, index) => {
          return (
            <>
              <UserCard
                key={index}
                src={item.image}
                userName={item.username}
                name={item.name}
                bio={bio_dummy}
              />
              {index + 1 === users.length && <div className="last"></div>}
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
    margin-bottom: 4rem;
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

    .last {
      min-width: 0.5rem;
      @media ${device.tablet} {
        display: none;
      }
      @media ${device.desktop} {
        display: none;
      }
    }
  }
`;
export default UsersList;
