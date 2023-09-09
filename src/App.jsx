import './App.scss';
import React, { Component } from 'react';
import Nav from './nav/Nav';
import Me from './me/Me';
import aboutme from './assets/about.png';
import projects from './assets/projects.png';

function App() {
  return (
    <>
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

          {/* <img src={aboutme} />
          <img src={projects} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
