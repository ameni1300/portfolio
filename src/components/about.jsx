import React, { useState } from 'react';
import './about.css';
import profileImage from '../assets/image4.png';
import cvFile from '../assets/CV.pdf';


const About = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }}

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About me</h2>
          <p>
            Welcome, everyone!<br />
            I’m Ameni Zakraoui, a second-year Computer Science Engineering student, motivated, detail-oriented, and deeply passionate about data science, software development, and innovative digital solutions. I enjoy working on challenging projects that blend creativity, problem-solving, and technical expertise. Through academic work, internships, and collaborative team projects
            {expanded && (
              <>
                 ,I’ve gained valuable hands-on experience that has strengthened my skills in programming, system management, and team coordination. I am committed to continuous learning and always eager to contribute to impactful, real-world solutions.
              </>
            )}
            <span className="read-more" onClick={handleToggle}>
              {expanded ? ' Read less' : '...read more'}
            </span>
          </p>
          <div className="about-buttons">
            <button href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="btn hire">Hire Me</button>
            <a href={cvFile} target="_blank" rel="noopener noreferrer" className="btn download">View CV</a>
          </div>
        </div>

        <div className="about-image">
          <div className="image-wrapper">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
