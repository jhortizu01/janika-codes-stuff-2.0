import React from 'react';
import banner from '../assets/banner.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';
import download from '../assets/download.png';
import resume from '../assets/JanikaHortizuela.pdf';
import about from '../assets/about.png';
import projects from '../assets/projects.png';

const Nav = () => {
  return (
    <nav>
      <img src={banner} alt='janika codes things written badly' />
      <section>
        <a href='https://github.com/jhortizu01'>
          <img src={github} alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/janika-hortizuela'>
          <img src={linkedin} alt='linkedin' />
        </a>
        <a href='mailto:janika.hortizuela@gmail.com'>
          <img src={email} alt='email' />
        </a>
        <a href={resume} download='Janika Hortizuela'>
          <img src={download} alt='download my resume' />
        </a>
      </section>
    </nav>
  );
};

export default Nav;
