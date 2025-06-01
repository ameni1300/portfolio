import React, { useState } from 'react';
import './WorksSlider.css';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image11 from '../assets/image11.png';

const WorksSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeDescriptionIndex, setActiveDescriptionIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "",
      type: "Mobile App",
      imageUrl: image5,
      description: (
        <div className="popup-content">
          <h3>📱 Spectacle+ — Mobile Show Booking App</h3>
          <p>Spectacle+ is an intuitive app for booking theater, concerts, and dance shows.</p>
          <ul>
            <li><strong>Goal:</strong> Make cultural events accessible.</li>
            <li><strong>Features:</strong> Booking, organizer dashboard, secure browsing.</li>
            <li><strong>Tech:</strong> MySQL backend.</li>
            <li><strong>Code:</strong> <a href="https://github.com/ameni1300/SpectaclePlus" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      title: "",
      type: "Java Game",
      imageUrl: image7,
      description:(
        <div className="popup-content">
          <h3>🕵️‍♂️ Undercover – Java Multiplayer Deduction Game</h3>
          <p>Undercover is a Java-based multiplayer party game where players take on secret roles—Civilians, Undercover agents, and Mr. White. Through discussion and strategic voting, players must uncover the hidden agents before it's too late. The game includes role management, a discussion forum, voting phases, and win condition logic, all structured into well-organized Java packages for player management, communication, voting, and administration.</p>
          <ul>
            
            <li><strong>Code:</strong> <a href="https://github.com/ameni1300/jeu-Undercover" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: "",
      type: "Website",
      imageUrl: image11,
      description: <p>Description of portfolio website...</p>
    },
  ];

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToProject = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const toggleDescription = (index) => {
    if (activeDescriptionIndex === index) {
      setActiveDescriptionIndex(null);
    } else {
      setActiveDescriptionIndex(index);
    }
  };

  return (
    <div className="works-container" id="works">
      <h2>My Recent Work</h2>

      <div className="slider-container">
        <button className="nav-button left" onClick={prevProject}>
          &lt;
        </button>

        <div className="slider">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="slide"
              style={{
                transform: `translateX(${-100 * currentIndex}%)`,
                transition: isTransitioning ? 'transform 0.6s' : 'none'
              }}
              >
              <div className="project-card" onClick={() => toggleDescription(index)}>
                <img src={project.imageUrl} alt={project.title} />
                {activeDescriptionIndex === index && (
                  <div className="popup-description" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={(e) => {
                      e.stopPropagation();
                      setActiveDescriptionIndex(null);
                    }}>✕</button>
                    {project.description}
                  </div>
                )}
              </div>

            </div>
            
          ))}
          
        </div>

        <button className="nav-button right" onClick={nextProject}>
          &gt;
        </button>
      </div>

      <div className="slider-indicators">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToProject(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksSlider;
