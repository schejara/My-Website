import React from 'react';
import './GraduationDetails.css';

function GraduationDetails() {
  return (
    <div className="graduation-container">
      <div className="content-wrapper">
        <div className="content">

          <section className="prime-section">
            <h1 className="education">Prime Digital Academy</h1>
            <h2>Full Stack Development Student</h2>
            <h3>July 2024 - December 2024</h3>
            <div className="prime-content">
              <div className="prime-text">
                <ul>
                  <li>Intensive immersive program with a focus on software development, project management, and collaboration.</li>
                  <li>Built over 80 GitHub repositories spanning a wide range of functions, projects, and applications.</li>
                  <li>Engaged in daily assignments, weekly challenges, and solo/group projects, including a comprehensive group capstone project.</li>
                  <li>Developed skills in problem-solving, project scoping, and agile methodologies through hands-on experience.</li>
                  <li>Participated in project planning, design documentation, and iterative development.</li>
                  <li>Developed key full-stack applications, including the ZipZap Shopping App (e-commerce platform) and the BCX FitJourney App (health and fitness tracker).</li>
                </ul>
              </div>
              <div className="prime-photo">
                <img 
                  src="/Image1.jpg" 
                  alt="A portrait of the developer" 
                />
              </div>
            </div>
          </section>

          <section className="education-section">
            <h2>Education & Certification:</h2>
            <div className="education-content">
              <div className="education-text">
                <ul>
                  <li>Full Stack Software Engineering Certification - Prime Digital Academy - December 2024</li>
                  <li>ISTQB - Certified Foundation Level Agile Tester - July 2022</li>
                  <li>Master of Commerce - University of Bikaner, India - July 2009</li>
                </ul>
              </div>
              <div className="certification-logos">
                <div className="istqb-logo">
                  <img 
                    src="/Istqb.png" 
                    alt="ISTQB Certification Logo" 
                  />
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default GraduationDetails;
