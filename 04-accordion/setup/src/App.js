import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <SingleQuestion data={data} />
  )
}

export default App;
