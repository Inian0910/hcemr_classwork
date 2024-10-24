import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function RegimenPage() {
  const [regimens, setRegimens] = useState([
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
  const [editRegime, setEditRegime] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Fetch regimen data from API (replace with actual API endpoint)
    axios.get('/api/regimens')
      .then(response => setRegimens(response.data))
      .catch(error => console.error(error));
  }, []);

// const regimesData = [
//   {
//     regimennId: 1,
//     uuid: 4322,
//     practitionerId: 232,
//     patientId: 122,
//     patientName: "Iniyan",
//     doa: "12/02/22",
//     regimen: "sdfdsfkdsfsd",
//     updatedRegimen: "sfdsfdssfasdfsd sdfdsfsd",
//   },
//   {
//     regimennId: 2,
//     uuid: 432,
//     practitionerId: 32,
//     patientId: 126,
//     patientName: "Kilsdf",
//     doa: "2/05/21",
//     regimen: "fsw",
//     updatedRegimen: "lpp",
//   },
//   {
//     regimennId: 1,
//     uuid: 42,
//     practitionerId: 2320,
//     patientId: 121,
//     patientName: "Kavin",
//     doa: "12/02/22",
//     regimen: "sdfdsfkdsfsd",
//     updatedRegimen: "sfdsfdssfasdfsd sdfdsfsd",
//   }
// ]

  const handleDelete = (regimennId) => {
    // Handle delete functionality
    const updatedRegimes = regimens.filter(reg => reg.regimennId !== regimennId)
    setRegimens(updatedRegimes)
  };

  const handleEdit = (regimennId) => {
    // Handle edit functionality
    const updatedRegime = regimens.find(reg => reg.regimennId === regimennId)
    setEditRegime(updatedRegime)
    alert(JSON.stringify(updatedRegime))
  };

  return (
    <div>
      <h2>Regimen Management</h2>
      <Button variant="primary" onClick={() => setShow(true)}>Add Regimen</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Regimen ID</th>
            <th>UUID</th>
            <th>Practitioner ID</th>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Date of Appointment</th>
            <th>Regimen</th>
            <th>Updated Regimen</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {regimens.map(regimen => (
            <tr key={regimen.regimennId}>
              <td>{regimen.regimennId}</td>
              <td>{regimen.uuid}</td>
              <td>{regimen.practitionerId}</td>
              <td>{regimen.patientId}</td>
              <td>{regimen.patientName}</td>
              <td>{new Date(regimen.doa).toLocaleDateString()}</td>
              <td>{regimen.regimen}</td>
              <td>{regimen.updatedRegimen}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(regimen.regimennId)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(regimen.regimennId)}>Delete</Button>
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

export default RegimenPage;
