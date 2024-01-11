import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import "./styles.css";

function StarRating({noOfStars = 5}) {

  function handleMouseClick(index) {
    setRating(index)
  }
  function handleMouseEnter(index) {
    setHover(index);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating-container">
      <div className="rating-box">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={index <= (hover || rating) ? "active" : ""}
              key={index}
              size={100}
              cursor={"pointer"}
              onClick={() => handleMouseClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            />
          );
        })}
      </div>
      {rating > 0 ? (`Rating: ${rating}/${noOfStars}`) : ""}
    </div>
  );
}

export default StarRating;
