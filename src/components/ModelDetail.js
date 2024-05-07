import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ModelDetail = () => {
  const { id } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    fetch(`/api/models/${id}`) // Change to your mock API endpoint
      .then((response) => response.json())
      .then((data) => setModel(data));
  }, [id]);

  if (!model) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{model.name}</h2>
      <p><strong>Provider:</strong> {model.provider}</p>
      <p><strong>Description:</strong> {model.description}</p>
      <p><strong>Example Code:</strong> {model.example_code}</p>
      <p><strong>Use Cases:</strong> {model.use_cases.join(', ')}</p>
    </div>
  );
};

export default ModelDetail;
