import React from "react";
import styled from "styled-components";
import { reviews } from "../../data/data";
import Button from "../Button";
import Rating from "../Rating";
import ReviewItem from "./ReviewItem";

function Reviews() {
  return (
    <Container>
      <div className="box">
        <div className="rating">
          <Rating size={1.4} />
        </div>
        <div>
          {reviews.map((item) => {
            return (
              <ReviewItem
                key={item.id}
                src={item.image}
                name={item.userName}
                time={item.date}
                review={item.review}
              />
            );
          })}
        </div>
        <div className="btn">
          <Button>Load More</Button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 1.5em;
  .rating {
    margin-bottom: 1em;
  }
  .btn {
    width: 100%;
    text-align: center;
  }
`;

export default Reviews;
