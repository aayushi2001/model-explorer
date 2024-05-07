import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedModels = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch('/api/models') // Change to your mock API endpoint
      .then((response) => response.json())
      .then((data) => setModels(data.filter((model) => model.featured)));
  }, []);

  return (
    <div>
      <h2>Featured Models</h2>
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

export default FeaturedModels;
