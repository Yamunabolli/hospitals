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
import Details from './Details';
import Register from './Register';

function App() {
  return (
    <div className="App">

    <Routes>
    {/* <Route  path='/' element={<Home/>}></Route> */}
    <Route  path='/' element={<Login/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    <Route  path='/Dashboard' element={<Dashboard/>}>
    <Route  path='/Dashboard/DemoComponent' element={<DemoComponent/>}> </Route>
    <Route  path='/Dashboard/Details' element={<Details/>}> </Route>

    </Route>

  </Routes>
    
    </div>
  );
}

export default App;
