import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';
import decorationLeft from '../assets/contact-left.png'; // Chemin vers votre image gauche
import decorationRight from '../assets/contact-right.png'; // Chemin vers votre image droite
const Contact = () => {
  return (
    

    <section id="contact" className="contact-section">
       <img 
        src={decorationLeft} 
        alt="Decoration left" 
        className="contact-decoration left" 
      />

      <div className="contact-container">
        <h2>Get in touch</h2>
        
        <p className="contact-intro">
          I'm always open to new opportunities, collaborations, or discussions around innovative projects in the field of computer science.  
          Feel free to reach out if you have any questions, proposals, or simply want to connect.  
          I'll be happy to get back to you as soon as possible.
        </p>
        
        <div className="contact-details">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a >+216 92172893</a>
          </div>
          
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/ameni1300" target="_blank" rel="noopener noreferrer">github.com/ameni1300</a>
          </div>
          
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a href="https://www.linkedin.com/in/ameni-zakraoui-666054330/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
          
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:amenizakraoui@gmail.com">amenizakraoui@gmail.com</a>
          </div>
        </div>
        
       
      </div>

       <img 
        src={decorationRight} 
        alt="Decoration right" 
        className="contact-decoration right" 
      />
    </section>
    
  );
};

export default Contact;