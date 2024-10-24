import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

function MedicineDispatchPage() {
  const [dispatches, setDispatches] = useState([]);

  useEffect(() => {
    // Fetch dispatch events data from API (replace with actual API endpoint)
    axios.get('/api/dispatches')
      .then(response => setDispatches(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    // Handle deletion logic
  };

  const handleEdit = () => {
    
  }

  return (
    <div>
      <h2>Medicine Dispatch Management</h2>
      <Button variant="primary">Add Dispatch Event</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Medicine ID</th>
            <th>Quantity</th>
            <th>Practitioner ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dispatches.map(dispatch => (
            <tr key={dispatch.event_id}>
              <td>{dispatch.event_id}</td>
              <td>{dispatch.p_name}</td>
              <td>{dispatch.date}</td>
              <td>{dispatch.medicine_id}</td>
              <td>{dispatch.quantity}</td>
              <td>{dispatch.pract_id}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(dispatch.event_id)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(dispatch.event_id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MedicineDispatchPage;
