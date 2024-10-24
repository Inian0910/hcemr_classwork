import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function PractitionerPage() {
  const [practitioners, setPractitioners] = useState(
    [
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
    ]
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedRegimen, setSelectedRegimen] = useState(null);
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   // Fetch practitioners data from the API (replace with actual API endpoint)
  //   axios.get('/api/practitioners')
  //     .then(response => {
  //       setPractitioners(response.data)
  //       console.log("Dd" ,response.data)
  //     })
  //     .catch(error => console.error(error));
  // }, [])

  const handleEdit = (regimen) => {
    setSelectedRegimen(regimen); // Set the regimen to be edited
    setShowModal(true);          // Show modal with form
  };

  const handleDelete = (id) => {
    // Handle deletion logic
  };

  return (
    <div>
      <h2>Practitioner Management</h2>
      <Button variant="primary" onClick={() => setShow(true)}>Add Practitioner</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Date of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {practitioners.map(pract => (
            <tr key={pract.pract_id}>
              <td>{pract.pract_id}</td>
              <td>{pract.name}</td>
              <td>{pract.role}</td>
              <td>{pract.date_of_joining}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(pract.pract_id)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(pract.pract_id)}>Delete</Button>
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
        <Form.Label htmlFor="DocIdentification5">ID</Form.Label>
      <Form.Control
        type="identification"
        id="DocIdentification5"
        aria-describedby="passwordHelpBlock"
      />
       <Form.Label htmlFor="Docname5">Name</Form.Label>
      <Form.Control
        type="name"
        id="DocName5"
        aria-describedby="passwordHelpBlock"
      /> <Form.Label htmlFor="dateofjoin5">Date Of Joining</Form.Label>
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

export default PractitionerPage;
