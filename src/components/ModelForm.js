import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const ModelForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [provider, setProvider] = useState('');
  const [exampleCode, setExampleCode] = useState('');
  const [useCases, setUseCases] = useState('');
  const navigate = useNavigate(); // Use navigate instead of history

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newModel = {
      name,
      description,
      provider,
      example_code: exampleCode,
      use_cases: useCases.split(',').map((s) => s.trim()),
    };

    fetch('/api/models', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newModel),
    })
      .then((response) => response.json())
      .then((data) => {
        // Redirect back to the list of models
        navigate('/models'); // Use navigate to redirect
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Model Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Provider:</label>
        <input
          type="text"
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Example Code:</label>
        <input
          type="text"
          value={exampleCode}
          onChange={(e) => setExampleCode(e.target.value)}
        />
      </div>
      <div>
        <label>Use Cases:</label>
        <input
          type="text"
          value={useCases}
          onChange={(e) => setUseCases(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ModelForm;
