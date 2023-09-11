import goback from '../assets/arrow.png';
import twitterapitext from '../assets/twitterapitext.png';
import twitterapi from '../assets/twitterapi.png';
import rosso from '../assets/rosso.gif';
import rossotext from '../assets/rossotext.png';
import thumbtack from '../assets/thumbtack.gif';
import thumbtacktext from '../assets/thumbtacktext.png';
import novelidea from '../assets/novelidea.png';
import novelideatext from '../assets/novelideatext.png';
import rancidtomatillos from '../assets/rancidtomatillos.png';
import rancidtomatillostext from '../assets/rancidtomatillostext.png';
import overlook from '../assets/overlook.png';
import overlooktext from '../assets/overlooktext.png';
import banner from '../assets/banner.png';
import carouselarrow from '../assets/carousel-arrow.png';
import projects from '../assets/projects.png'
import { Link } from 'react-router-dom';
import { responsive } from './responsive';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick}>
      <img src={carouselarrow} />
    </button>
  );

  const CustomLeft = ({ onClick }) => (
    <button className='arrow left' onClick={onClick} >
      <img src={carouselarrow} />
    </button>
  );

  return (
    <div className='projects'>
      <img src={banner} alt='janika codes stuff' className='banner' />
    <img src={projects} alt='projects' className='projects'/>
      <Link to='/'>
        <img src={goback} alt='go back' className='goback' />
      </Link>

      <Carousel
        responsive={responsive}
        swipeable={true}
        arrows={true}
        customRightArrow={<CustomRight />}
        customLeftArrow={<CustomLeft />}

      >
        <div className='project'>
          <img src={twitterapi} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={twitterapitext} alt='link to twitter api' />
          </a>
        </div>
        <div className='project'>
          <img src={rosso} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={rossotext} alt='link to rosso' />
          </a>
        </div>
        <div className='project'>
          <img src={thumbtack} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={thumbtacktext} alt='link to rosso' />
          </a>
        </div>
        <div className='project'>
          <img src={novelidea} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={novelideatext} alt='link to rosso' />
          </a>
        </div>
        <div className='project'>
          <img src={rancidtomatillos} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={rancidtomatillostext} alt='link to rosso' />
          </a>
        </div>
        <div className='project'>
          <img src={overlook} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={overlooktext} alt='link to rosso' />
          </a>
        </div>
      </Carousel>
      {/* </div> */}
    </div>
  );
};

export default Projects;
