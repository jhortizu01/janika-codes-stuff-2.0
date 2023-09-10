import './App.scss';
import React, { Component } from 'react';
import Nav from './nav/Nav';
import aboutme from './assets/about.png';
import projects from './assets/projects.png';
import AboutMe from './aboutme/AboutMe';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div className='App'>
              <Nav />
              <div className='me' />
              <div className='App-links_container'>
                <div>
                  <img className='links about-me' src={aboutme} />
                </div>
                <div>
                  <img className='links projects' src={projects} />
                </div>
              </div>
            </div>
          }
        />
         <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
