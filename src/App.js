import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModelList from './components/ModelList';
import FeaturedModels from './components/FeaturedModels';
import ModelDetail from './components/ModelDetail';
import ModelForm from './components/ModelForm';

const App = () => (
  <Router>
    <div>
      <h1>Model Explorer</h1>
      <Routes>
        <Route path="/" element={<ModelList />} /> {/* Default route */}
        <Route path="/models" element={<ModelList />} />
        <Route path="/featured" element={<FeaturedModels />} />
        <Route path="/model/:id" element={<ModelDetail />} />
        <Route path="/add-model" element={<ModelForm />} />
      </Routes>
    </div>
  </Router>
);

export default App;
