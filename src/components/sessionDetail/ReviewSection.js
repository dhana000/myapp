import React from "react";
import { useDispatch } from "react-redux";
import Rating from "../Rating";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";
import { device } from "../../styles/devices";
import Button from "../Button";
import useCoursel from "../../hooks/useCoursel";
import PrevNextBtns from "../PrevNextBtns";
import { showModel } from "../../redux";
import MyModel from "../MyModel";
import Reviews from "../../components/Profile/Reviews";
import { reviews } from "../../data/data";

function ReviewSection() {
  const dispatch = useDispatch();
  const { ref, ...buttonProps } = useCoursel();

  return (
    <>
      <ReviewContainer>
        <div>
          <Rating size={"1.4"} />
          <PrevNextBtns {...{ ...buttonProps }} />
        </div>
        <div className="container" ref={ref}>
          {reviews.map((item) => {
            return <ReviewItem item={item} key={item.id} />;
          })}
          <div className="last"></div>
        </div>
        <div className="btn">
          <Button onClick={() => dispatch(showModel())}>
            Load More Reviews
          </Button>
        </div>
      </ReviewContainer>
      <MyModel heading="Santhosh's Reviews">
        <Reviews />
      </MyModel>
    </>
  );
}

const ReviewContainer = styled.div`
  margin-bottom: 1.6em;
  padding-bottom: 2em;
  border-bottom: 1px solid ${(props) => props.theme.border};
  margin-top: -0.6em;

  .btn {
    padding: 0em 1.5em;
  }

  @media ${device.tablet} {
    width: 790px;
    margin: auto;
    .btn {
      width: 50%;
      padding: 0em 1.5em;
    }
  }
  @media ${device.desktop} {
    width: 1100px;
    margin: auto;
  }

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5em;
    padding: 0em 1.5em;

    @media ${device.tablet} {
      padding: 0em;
    }
    @media ${device.desktop} {
      padding: 0em;
    }
  }

  .container {
    width: 100%;
    padding-left: 1.5em;
    background: white;
    height: 17.2rem;
    overflow: auto;
    display: flex;
    gap: 0.5em;
    scroll-snap-type: x mandatory;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
    @media ${device.tablet} {
      padding-left: 0rem;
    }
    @media ${device.desktop} {
      padding-left: 0rem;
    }
  }
  .last {
    min-width: 1rem;
    height: 90%;

    @media ${device.desktop} {
      display: none;
    }
  }
`;
export default ReviewSection;
