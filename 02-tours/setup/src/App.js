import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);//
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();

      setLoading(false);
      setTours(tours);
    }
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTours();
  }, []);


  if (loading) {
    return (
      <Loading />
    );
  }
  if (tours.length > 0) {
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
  } else {
    return (
      <main>
        <div className="title">
          <h3>No Tours Left</h3>
        </div>

        <button className="btn" onClick={fetchTours}>Refresh</button>
      </main>
    )
  }
  // fetch(url).then(response => data.json);

}

export default App