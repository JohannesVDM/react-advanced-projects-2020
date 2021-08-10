import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return setIndex(0);
    } else if (number < 0) {
      return setIndex(people.length - 1);
    } else {
      return setIndex(number);
    };
  };

  const checkRandom = () => {
    let randomNum = Math.floor((people.length) * (Math.random()));
    while (randomNum === index) {
      console.log("lost in space...🌌");
      randomNum = Math.floor((people.length) * (Math.random()));
    }
    setIndex(randomNum);
    //console.log(randomNum);
  }

  function rightClickHandle() {
    checkNumber(index + 1);
  }

  function leftClickHandle() {
    checkNumber(index - 1);
  }

  function randomHandle() {
    checkRandom();
    // checkRandom(Math.floor((people.length) * (Math.random())));
  }

  return (
    <>
      <div className='person'>
        <img src={image} alt={name + ' image'} className='person-img' />
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{text}</p>
      </div>
      <FaChevronLeft onClick={leftClickHandle} /><FaChevronRight onClick={rightClickHandle} />
      <button onClick={randomHandle}>Surprise Me</button>
    </>
  );
};

export default Review;
