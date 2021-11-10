import React  from 'react';

import './App.css';

import Register from './components/register';
import Login from './components/login';

import {BrowserRouter as Router, Route, Routes/*, Navigate*/} from 'react-router-dom';
//import { Redirect } from 'react-router'

function App() {
  return (
    <div className="App">
      <Router>
        {/*<Navigate exact from="/" to="/login" />*/}
        <Routes>
          <Route path='/signup' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 