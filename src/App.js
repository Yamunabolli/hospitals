import './App.css';
import Login from './Login';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';
import DemoComponent from './DemoComponent';
import Patients from './Patients';
import Register from './Register';
import Forgotpswd from './Forgotpswd';
import Sign from './Sign';
import Doctor from './Doctor';
import PatientsList from './PatientsList';
import Patient from './Patient';
import DoctorList from './DoctorList';

function App() {
  return (
    <div className="App">
{/* <Sign/> */}
    <Routes>
    <Route  path='/' element={<Login/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    <Route path='/Patients' element={<Patients/>}></Route>

    <Route path='/Patient' element={<Patient/>}> 
    <Route  path='/Patient/DoctorList' element={<DoctorList/>}></Route>

    </Route>
    <Route path='/Forgotpswd' element={<Forgotpswd/>}></Route>
    <Route  path='/Doctor' element={<Doctor/>}> 
    <Route  path='/Doctor/PatientList' element={<PatientsList/>}></Route>

    </Route>

    <Route  path='/Dashboard' element={<Dashboard/>}>
    <Route  path='/Dashboard/DemoComponent' element={<DemoComponent/>}> </Route>
    <Route  path='/Dashboard/Patients' element={<Patients/>}> </Route>
    <Route path='/Dashboard/Register' element={<Register/>}></Route>


    </Route>

  </Routes>
    
    </div>
  );
}

export default App;
