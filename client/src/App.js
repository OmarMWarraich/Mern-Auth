import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';


import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
            <div className='App'>
              <Navbar />
              <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              </Routes>
            </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App