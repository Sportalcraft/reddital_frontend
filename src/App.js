import React  from 'react';

import './App.css';

import Signup from './components/sign-up/sign-up.component'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
          <Route path='/signup' element={<Signup />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
 