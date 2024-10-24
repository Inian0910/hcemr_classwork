import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function MedicinePage() {
  const [medicines, setMedicines] = useState([
      {
        regimennId: 1,
        uuid: 4322,
        practitionerId: 232,
        patientId: 122,
        patientName: "Iniyan",
        doa: "12/02/22",
        regimen: "sdfdsfkdsfsd",
        updatedRegimen: "sfdsfdssfasdfsd sdfdsfsd",
      },
      {
        regimennId: 2,
        uuid: 432,
        practitionerId: 32,
        patientId: 126,
        patientName: "Sharan",
        doa: "2/05/21",
        regimen: "fsw",
        updatedRegimen: "lpp",
      },
      {
        regimennId: 1,
        uuid: 42,
        practitionerId: 2320,
        patientId: 121,
        patientName: "Kavin",
        doa: "12/02/22",
        regimen: "sdfdsfkdsfsd",
        updatedRegimen: "sfdsfdssfasdfsd sdfdsfsd",
      }
    
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [show, setShow] = useState(false);


  useEffect(() => {
    // Fetch medicine data from API (replace with actual API endpoint)
    axios.get('/api/medicines')
      .then(response => setMedicines(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleEdit = (medicine) => {
    setSelectedMedicine(medicine); // Set the medicine to be edited
    setShowModal(true);            // Show modal with form
  };

  const handleDelete = (med_id) => {
    // Handle medicine deletion logic
    axios.delete(`/api/medicines/${med_id}`)
      .then(() => {
        setMedicines(medicines.filter(medicine => medicine.med_id !== med_id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Medicine Management</h2>
      <Button variant="primary" onClick={() => setShow(true)}>Add Medicine</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Medicine ID</th>
            <th>Medicine Name</th>
            <th>Cost</th>
            <th>Quantity</th>
            <th>Shelf Section</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map(medicine => (
            <tr key={medicine.med_id}>
              <td>{medicine.med_id}</td>
              <td>{medicine.name}</td>
              <td>{medicine.cost}</td>
              <td>{medicine.quantity}</td>
              <td>{medicine.shelf_section}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(medicine.med_id)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(medicine.med_id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="DocIdentification5">Medicine Name</Form.Label>
      <Form.Control
        type="identification"
        id="DocIdentification5"
        aria-describedby="passwordHelpBlock"
      />
       <Form.Label htmlFor="Docname5">Cost</Form.Label>
      <Form.Control
        type="name"
        id="DocName5"
        aria-describedby="passwordHelpBlock"
      /> 
      <Form.Label htmlFor="dateofjoin5">Quantity</Form.Label>
      <Form.Control
        type="dateofjoining"
        id="dateofjoin5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Label htmlFor="dateofjoin5">Shelf Section</Form.Label>
      <Form.Control
        type="dateofjoining"
        id="dateofjoin5"
        aria-describedby="passwordHelpBlock"
      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MedicinePage;
