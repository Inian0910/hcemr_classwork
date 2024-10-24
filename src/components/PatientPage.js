import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

function PatientPage() {
  const [patients, setPatients] = useState([
    
  ]);

  useEffect(() => {
    // Fetch patient data from API (replace with actual API endpoint)
    axios.get('/api/patients')
      .then(response => setPatients(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    // Handle patient deletion logic
  };

  const handleEdit = () => {
    
  }

  return (
    <div>
      <h2>Patient Management</h2>
      <Button variant="primary">Add Patient</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>PID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Date of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.pid}>
              <td>{patient.pid}</td>
              <td>{patient.p_name}</td>
              <td>{patient.phone_number}</td>
              <td>{patient.gender}</td>
              <td>{patient.date_of_join}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(patient.pid)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(patient.pid)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PatientPage;