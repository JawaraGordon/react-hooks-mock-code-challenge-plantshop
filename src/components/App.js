import React, { useState, useEffect } from 'react';
import Header from './Header';
// import NewPlantForm from './NewPlantForm';
import PlantPage from './PlantPage';

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((r) => r.json())
      .then((plantArr) => {
        setPlants(plantArr);
      });
  }, []);

  // function addPlant(newPlant) {
  //   setPlants((plants) => [...plants, newPlant]);
  // }

  // useEffect(() => {
  //   addPlant();
  // }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} />
      {/* <NewPlantForm addPlant={addPlant} /> */}
    </div>
  );
}

export default App;
