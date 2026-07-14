import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import PropsPage from './pages_09-07-2026/props_09-07-2026/PropsPage';
import Employeepage from './pages_09-07-2026/mini-project/Employeepage';
import LocalstatePage from './pages_09-07-2026/state_09-07-2026/LocalstatePage';
import Contextpage from './pages_09-07-2026/state_09-07-2026/Contextpage';
import Globalstatepage from './pages_09-07-2026/state_09-07-2026/Globalstatepage';
import Contextpages from './pages_09-07-2026/Context_10-07-2026/Contextpages';
import Authenticationpage from './pages_09-07-2026/Context_10-07-2026/Authenticationpage';
import APIpages from './pages_09-07-2026/API_10-07-2026/APIpages';
import Axios from './pages_09-07-2026/API_10-07-2026/Axios';
import Apicallspage from './pages_09-07-2026/API_10-07-2026/Apicallspage';
import Assignmentpage from './pages_09-07-2026/API_10-07-2026/Assignmentpage';
import Projectpage from './pages_09-07-2026/Miniproject_10-07-2026/projectpage';
import Contextpage1 from './pages_09-07-2026/context_13-07-2027/Contextpage1';
import Contextpage2 from './pages_09-07-2026/context_13-07-2027/Contextpage2';
import Contexthookpage from './pages_09-07-2026/context_13-07-2027/Contexthookpage';
import Contextsharingpage from './pages_09-07-2026/context_13-07-2027/Contextsharingpage';
import Authenticationpage1 from './pages_09-07-2026/context_13-07-2027/Authenticationpage1';
import Themepage from './pages_09-07-2026/context_13-07-2027/Themepage';
import Contextspage from './pages_09-07-2026/context_13-07-2027/Contextspage';
import Counterpage from './pages_09-07-2026/Redux_14-07-2026/Counterpage';
import Employeepages from './pages_09-07-2026/Redux_14-07-2026/Employeepages';
import ContextEmppage from './pages_09-07-2026/Redux_14-07-2026/ContextEMPpage';
import Slicepage from './pages_09-07-2026/Redux_14-07-2026/Slicepage';



function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/props' element={<PropsPage/>}/>
    <Route path='/localstate' element={<LocalstatePage/>}/>
    <Route path='/employee' element={<Employeepage/>}/>
    <Route path='/context' element={<Contextpage/>}/>
    <Route path='/globalpage' element={<Globalstatepage/>}/>
    <Route path='/contexts' element={<Contextpages/>}/>  
    <Route path='/auth' element={<Authenticationpage/>}/>            
    <Route path='/api' element={<APIpages/>}/>   
    <Route path='/axios' element={<Axios/>}/>   
    <Route path='/apicalls' element={<Apicallspage/>}/>
    <Route path='/assignment' element={<Assignmentpage/>}/>
    <Route path='/miniproject' element={<Projectpage/>}/> 
    <Route path='/con' element={<Contextpage1/>}/>  
    <Route path='/cont' element={<Contextpage2/>}/> 
    <Route path='/contexthook' element={<Contexthookpage/>}/>
    <Route path='/contextsharing' element={<Contextsharingpage/>}/>   
    <Route path='/authentication' element={<Authenticationpage1/>}/>  
    <Route path='/theme' element={<Themepage/>}/>  
    <Route path='/infile' element={<Contextspage/>}/>  
    <Route path='/counter' element={<Counterpage/>}/> 
    <Route path='/emp' element={<Employeepages/>}/> 
    <Route path='/emp1' element={<ContextEmppage/>}/> 
    <Route path='/slice' element={<Slicepage/>}/> 
  </Routes>
  </BrowserRouter>
  )
}

export default App