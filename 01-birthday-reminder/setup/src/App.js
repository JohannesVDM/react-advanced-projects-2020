import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, personsDisplay] = useState(data);

  function buttonHandler() {
    personsDisplay([]);
  };

  let numElements = 0;
  people.forEach(() => {
    numElements++;
  });

  return (
    <>
      <h2>{numElements + ' birthdays today'}</h2>
      {
        <List people={people} />
      }
      <button className='btn' onClick={buttonHandler}>Clear all</button>
    </>
  );
}

export default App;
