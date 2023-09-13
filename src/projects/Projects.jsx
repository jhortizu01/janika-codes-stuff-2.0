import goback from '../assets/arrow.png';
import banner from '../assets/banner.png';
import carouselarrow from '../assets/carousel-arrow.png';
import projects from '../assets/projects.png';
import { Link } from 'react-router-dom';
import { responsive } from './responsive';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data } from './projectdata';

const Projects = () => {
  const CustomRight = ({ onClick }) => (
    <button className='arrow right' onClick={onClick}>
      <img src={carouselarrow} />
    </button>
  );

  const CustomLeft = ({ onClick }) => (
    <button className='arrow left' onClick={onClick}>
      <img src={carouselarrow} />
    </button>
  );

  return (
    <div className='projects'>
      <img src={banner} alt='janika codes stuff' className='banner' />
      <img src={projects} alt='projects' className='projects' />
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
        {data.map((item) => {
          return (
            <a href={item.link} target="_blank">
              <div className='project'>
                <img src={item.image} />
                <img src={item.title} alt='link to twitter api' />
              </div>
            </a>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Projects;
