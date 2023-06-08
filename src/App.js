import Graph from './Graph';
import Search from './Search';

import { useState } from 'react';

function App() {

  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fats, setFats] = useState(0);

  const handleCarbs = (e) => {
    setCarbs(e.target.value);
    e.preventDefault();
  };

  const handleProtein = (e) => {
    setProtein(e.target.value);
    e.preventDefault();
  };

  const handleFats = (e) => {
    setFats(e.target.value);
    e.preventDefault();
  };
  return (
    <div className="app">
        
        <div className="goals">
          <h1 className="goalsTitle">Let's set your goals:</h1>
          <div><input
            className="inputGoals"
            type="number"
            placeholder="CARBO IN GRAMS"
            onChange={handleCarbs}
          /></div>
          <div><input
            className="inputGoals"
            type="number"
            placeholder="FAT IN GRAMS"
            onChange={handleFats}
          /></div>

          <div><input
            className="inputGoals"
            type="number"
            placeholder="PROTEIN IN GRAMS"
            onChange={handleProtein}
          /></div>

          <div>
            <p className="totalLabel">Total Calories: <span className="bold">{(carbs * 4) + (protein * 4) + (fats * 9)}</span></p>
          </div>
          
        </div>
        <Search />
        <Graph />
      </div>

  );
}

export default App;
