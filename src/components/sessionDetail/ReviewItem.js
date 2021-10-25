import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { device } from "../../styles/devices";
import { showModel } from "../../redux";

function ReviewItem({ item }) {
  const dispatch = useDispatch();
  const truncate = (string, n) => string.slice(0, n).concat("...");

  const { username, date, review, image } = item;

  return (
    <Item>
      <div>
        <img src={image} />
        <div className="name">
          {username && <p>{username}</p>}
          {date && <p>{date}</p>}
        </div>
      </div>
      <p>
        {review.length < 150 ? (
          review
        ) : (
          <>
            {truncate(review, 150)}
            <button onClick={() => dispatch(showModel())}>
              more <AiOutlineRight className="icon" />
            </button>
          </>
        )}
      </p>
    </Item>
  );
}

const Item = styled.div`
  min-width: 17rem;
  height: 15rem;
  border-radius: 1rem;
  padding: 1em;
  border: 1px solid ${(props) => props.theme.border};
  over-flow: hidden;
  scroll-snap-align: center;
  background: white;

  @media ${device.tablet} {
    min-width: 16rem;
    scroll-snap-align: start;
  }

  @media ${device.desktop} {
    min-width: 16.7rem;
  }

  img {
    display: inline-block;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 2rem;
    object-fit: cover;
    object-position: center;
  }

  & > div {
    display: flex;
    align-items: center;
  }

  .name {
    margin-left: 0.5em;
  }

  .name p:first-of-type {
    font-weight: 500;
    width: 90%;
  }
  .name p:nth-of-type(2) {
    color: ${(props) => props.theme.onSecondary};
  }

  & > p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1em;

    button {
      border: none;
      font-size: 1rem;
      margin-left: 0.1em;
      background: none;
      cursor: pointer;
      outline: none;
      text-decoration: underline;
      display: inline-flex;
      align-items: center;
    }
  }
`;

export default ReviewItem;
