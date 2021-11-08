import React  from 'react';

import './App.css';

import Signin from './components/sign-in/sign-in.component'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
          <Route path='/signin' element={<Signin />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
 