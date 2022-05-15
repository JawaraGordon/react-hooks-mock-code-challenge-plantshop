import React, { useState} from 'react';

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
      }),
    })
      .then((r) => r.json())
      .then((newPlant) => onAddPlant(newPlant));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

// function NewPlantForm({ addPlant, setPlants }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     image: '',
//     price: '',
//   });

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch('http://localhost:6001/plants', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ formData }),
//     })
//       .then((r) => r.json())
//       .then((newPlant) => addPlant(newPlant));
//   }

//   useEffect(() => {
//     setFormData();
//   }, []);

//   function handleChange(e) {
//     setFormData((formData) => ({
//       ...formData,
//       [e.target.name]: e.target.value,
//     }));
//   }

//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Plant name"
//         />
//         <input
//           type="text"
//           name="image"
//           value={formData.image}
//           onChange={handleChange}
//           placeholder="Image URL"
//         />
//         <input
//           type="number"
//           name="price"
//           step="0.01"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Price"
//         />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

export default NewPlantForm;
