import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddScenario from './pages/AddScenario';
import AllScenario from './pages/AllScenario';
import AddVehicle from './pages/AddVehicle';
import React, { useState } from 'react';

function App() {

  const [allForm, setAllForm] = useState("");

  console.log(allForm);
  console.log(allForm.scenarioname);

  return (
    <div className='wrapper'>
      
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home allForm={allForm} setAllForm={setAllForm}/>}/>
        <Route path='/addscenario' element={<AddScenario setAllForm={setAllForm}/>}/>
        <Route path='/allscenario' element={<AllScenario/>}/>
        <Route path='/addvehicle' element={<AddVehicle setAllForm={setAllForm}/>}/>

      </Routes>


    </div>
  );
}

export default App;
