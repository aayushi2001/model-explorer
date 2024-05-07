import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ModelList = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch('/models.json') // Path to your JSON file in the `public` folder
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch models');
        }
        return response.json();
      })
      .then((data) => setModels(data))
      .catch((error) => {
        console.error('Error fetching models:', error);
      });
  }, []);

  if (models.length === 0) {
    return <div>No models found.</div>; // Handle empty response
  }

  return (
    <div>
      <h2>Available Models</h2>
      <ul>
        {models.map((model) => (
          <li key={model.id}>
            <Link to={`/model/${model.id}`}>{model.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModelList;
