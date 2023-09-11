import React from 'react';
import banner from '../assets/banner.png';
import about from '../assets/about.png';
import janika from '../assets/profile.jpeg';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';

const AboutMe = ({ bio, avatar }) => {
  console.log(bio);

  return (
    <div className='aboutme'>
      <img src={banner} className='aboutme-banner' />
      <Link to='/'>
        <img src={arrow} className='aboutme-goback' />
      </Link>
      <section>
        <img src={avatar} />
        <p>{bio}</p>
      </section>
    </div>
  );
};

export default AboutMe;
