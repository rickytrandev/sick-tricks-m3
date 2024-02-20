import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchTricks } from '../../apiCalls';
import { CardSection } from '../CardSection/CardSection';
import { Form } from '../Form/Form';

function App() {
  const [tricks, setTricks] = useState([])

  function addTrick(newTrick) {
    setTricks([...tricks, newTrick])
  }

  useEffect(() => {
    fetchTricks()
      .then(tricks => setTricks(tricks))
  }, [])
  
  console.log(tricks)

  return (
    <div className="App">
      <div>
      <h1>Sick Trick Wish List</h1>
        <Form addTrick={addTrick} />
        <CardSection tricks={tricks} />
      </div>
    </div>
  );
}

export default App; 
