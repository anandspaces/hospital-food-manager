// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PatientForm from './components/PatientForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Hospital Food Management System</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-patient" element={<PatientForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
