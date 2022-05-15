import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, setPlants, onDeletePlant, onUpdatePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          setPlants={setPlants}
          onDeletePlant={onDeletePlant}
          onUpdatePlant={onUpdatePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
