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
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div className='projects'>
      <img src={banner} alt='janika codes stuff'  className='banner'/>
      <Link to='/'>
        <img src={goback} alt='go back'  className='goback'/>
      </Link>
      <div className='projects-container'>
        <section className='project'>
          <img src={twitterapi} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={twitterapitext} alt='link to twitter api' />
          </a>
        </section>
        <section className='project'>
          <img src={rosso} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={rossotext} alt='link to rosso' />
          </a>
        </section>
        <section className='project'>
          <img src={thumbtack} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={thumbtacktext} alt='link to rosso' />
          </a>
        </section>
        <section className='project'>
          <img src={novelidea} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={novelideatext} alt='link to rosso' />
          </a>
        </section>
        <section className='project'>
          <img src={rancidtomatillos} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={rancidtomatillostext} alt='link to rosso' />
          </a>
        </section>
        <section className='project'>
          <img src={overlook} />
          <a href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2023-team-3'>
            <img src={overlooktext} alt='link to rosso' />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projects;
