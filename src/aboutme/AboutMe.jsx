import me from '../assets/mechicken.jpeg';
import banner from '../assets/banner.png';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';

const AboutMe = ({ bio, avatar }) => {
  return (
    <div className='aboutme'>
      <img src={banner} className='aboutme-banner' />
      <Link to='/'>
        <img src={arrow} className='aboutme-goback' />
      </Link>
      <section>
        <div className='image-container'>
        <img src={me} alt='Janika wearing a chicken hat' />
        </div>
        
        <div>
          <p>
            Meet Janika Hortizuela, the Fullstack Developer extraordinaire who's
            all about delivering top-notch code solutions. With a knack for
            finding answers and ensuring customer satisfaction, she's your go-to
            tech guru.
          </p>

          <p>
            Janika's expertise lies in crafting consumer-focused websites using
            JavaScript, React, Java, and Spring Boot. She's a problem-solving
            maestro who thrives in highly collaborative work environments.
          </p>
          <p>
            Her track record includes delivering production-grade websites for
            multiple clients, honing her skills in HTML, CSS, and
            JavaScript/React. Janika is well-versed in unit testing, integration
            testing, and troubleshooting, ensuring code coverage hits 100%.
          </p>
          <p>
            In her previous role as an Associate Software Developer at
            RightPoint, she excelled in an Agile environment, managing user
            stories and bugs with Azure DevOps. Her attention to detail extends
            to accessibility principles, ensuring web applications cater to
            diverse user groups.
          </p>

          <p>
            So, whether you're in need of a coding wizard or a tech-savvy
            solution-finder, Janika Hortizuela is the Fullstack Developer you
            want on your team. She'll tackle your web development challenges
            with expertise and a dash of humor.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
