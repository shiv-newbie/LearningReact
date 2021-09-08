import React, { useState, useEffect } from "react";

const Tour = (tours) => {
  const { id, image, info, name, price, removeTour } = tours.tours;
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="box">
        <img src={image} alt={name} />

        <footer>
          <div className="info">
            <h4>{name}</h4>
            <h4 className="btn">${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "  read more"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => tours.removeTour(id)}>
            Not Interested
          </button>
        </footer>
      </div>
    </>
  );
};

export default Tour;
