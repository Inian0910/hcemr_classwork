import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/Header';
import PractitionerPage from './components/Practitioner';
import MedicinePage from './components/MedicinePage';
import RegimenPage from './components/RegimenPage';
import MedicineDispatch from "./components/MedicineDispatchPage"
import PatientPage from "./components/PatientPage" 
// import   UpdateRegimen from "./components/Update"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PractitionerPage />} />
        <Route path="/practitionerPage" element={<PractitionerPage />} />
        <Route path="/patientPage" element={<PatientPage/>} />
        <Route path="/medicines" element={<MedicinePage />} />
        <Route path="/regimens" element={<RegimenPage />} />
        {/* <Route path="/updateRegimen" element={<UpdateRegimen/>} /> */}
        <Route path="/medicineDispatch" element={<MedicineDispatch/>} />
      </Routes>
    </Router>
  );
}

export default App;
