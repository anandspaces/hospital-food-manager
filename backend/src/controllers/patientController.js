const Patient = require('../models/patientModel');

// Create a new patient
const createPatient = async (req, res) => {
  try {
    const { name, diseases, allergies, roomNumber, bedNumber, floorNumber, age, gender, contactInfo, emergencyContact } = req.body;
    const patient = await Patient.create({ name, diseases, allergies, roomNumber, bedNumber, floorNumber, age, gender, contactInfo, emergencyContact });
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error creating patient', error });
  }
};

// Get all patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients', error });
  }
};

module.exports = { createPatient, getPatients };
