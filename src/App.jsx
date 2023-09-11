import './App.scss';
import React, { useState, useEffect } from 'react';
import Nav from './nav/Nav';
import aboutme from './assets/about.png';
import projects from './assets/projects.png';
import AboutMe from './aboutme/AboutMe';
import Projects from './projects/Projects';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [aboutData, setAboutData] = useState({});
  const fetchRequest = () => {
    fetch('https://api.github.com/users/jhortizu01')
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  console.log(aboutData);
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
                <Link to='/aboutme'>
                  <div>
                    <img className='links about-me' src={aboutme} />
                  </div>
                </Link>
                <Link to='/projects'>
                  <div>
                    <img className='links projects' src={projects} />
                  </div>
                </Link>
              </div>
            </div>
          }
        />
        <Route
          path='/aboutme'
          element={
            <AboutMe bio={aboutData.bio} avatar={aboutData.avatar_url} />
          }
        />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
