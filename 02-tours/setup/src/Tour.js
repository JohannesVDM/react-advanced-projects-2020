import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  // function interestButtonHandler() {
  //   setRemainder = ([]);
  // }
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-title">
        </div>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">
            <h4>${price}</h4>
          </div>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article >
  );
};

export default Tour;
