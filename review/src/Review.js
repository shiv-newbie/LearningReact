import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Reviews from "./data";

export default function Review() {
  const [start, setStart] = useState(1);
  const { id, name, job, image, text } = Reviews[start - 1];

  const randVar = () => {
    var num = Math.floor(Math.random() * 4) + 1;
    if (num === start) {
      randVar();
    }
    setStart(num);
  };

  const checkStart = (idx) => {
    if (idx === Reviews.length + 1) {
      return 1;
    } else if (idx === 0) {
      return Reviews.length;
    } else {
      return idx;
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="image" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <footer>
        <h4 className="name">{name}</h4>
        <div className="job">{job}</div>
        <p className="info">{text}</p>
        <button
          className="prev-btn"
          onClick={() => {
            setStart(checkStart(start - 1));
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            setStart(checkStart(start + 1));
          }}
        >
          <FaChevronRight />
        </button>
        <br />
        <button className="random-btn" onClick={() => randVar()}>
          Surprise Me
        </button>
      </footer>
    </article>
  );
}
