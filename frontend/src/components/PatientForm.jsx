// src/components/PatientForm.jsx
import React, { useState } from 'react';

const PatientForm = () => {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [diseases, setDiseases] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send patient data to backend
    console.log('Patient Details Submitted:', { patientName, age, diseases });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Patient Name:</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Diseases:</label>
        <input
          type="text"
          value={diseases}
          onChange={(e) => setDiseases(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientForm;
