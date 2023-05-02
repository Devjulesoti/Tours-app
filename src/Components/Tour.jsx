import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="" className="tour-image" loading="lazy" />
      <footer>
        <div className="tour-div">
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <p className="tour-info">
          {readmore ? info : `${info.substring(0, 100)}...`}

          <button
            className="read-button"
            onClick={() => {
              setReadmore(!readmore);
            }}
          >
            {readmore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          className="no-intrest"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
