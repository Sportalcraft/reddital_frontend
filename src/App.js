import React  from 'react';

import './App.css';

import Register from './components/register';
import Login from './components/login';
import Posting from './components/posting';

import {Route, Routes/*, Navigate*/} from 'react-router-dom';

//import { Redirect } from 'react-router'

function App() {
  return (
    <div className="App">
        {/*<Navigate exact from="/" to="/login" />*/}
        <Routes>
          <Route path='/signup' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/:subreddit/post" element={<Posting />} />
        </Routes>
    </div>
  );
}

export default App;
 