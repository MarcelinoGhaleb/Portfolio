import React from 'react';
import HomeText from '../components/HomeText';
import '../App.css';

const Home: React.FC = () => {
  return (
    <div className='centering'>
      <div className="container">
        <div className="content">
          <HomeText />
          <p>
            Experienced web developer proficient in HTML, CSS, JavaScript, TypeScript, php and various frameworks. Skilled in both front-end and back-end development, with a keen eye for design and user experience. Strong collaborator with a passion for problem-solving and delivering high-quality projects on time. Ready to contribute expertise to innovative web development initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

