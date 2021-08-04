import React from 'react';

const List = ({ people }) => {

  return (
    <>
      {
        people.map((e) => {
          return (
            <div className="person">
              <h4>{e.name}</h4>
              <h4>{e.age + ' years'}</h4>
              <img src={e.image} alt={e.name + "'s picture"} />
            </div>
          );
        })
      }
    </>
  );
};

export default List;
