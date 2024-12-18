
import React from 'react';
import './GraduationDetails.css';

function GraduationDetails() {
  return (
    <div className="graduation-container">
      <div className="content-wrapper">
        <div className="content">
        <h2>Education & Certification:</h2>
          <ul>
             <li>Full Stack Software Engineering Certification - Prime Digital Academy - December 2024</li>
             <li>ISTQB - Certified Foundation Level Agile Tester - July 2022</li>
             <li>Master of Commerce - University of Bikaner, India - July 2009</li>
             </ul>
       

          <h2>Prime Digital Academy</h2>
          <h3>Full Stack Development Student</h3>
          <h3>July 2024 - December 2024</h3>
          <ul>
            <li>Intensive immersive program with a focus on software development, project management, and collaboration.</li>
            <li>Build over 80 GitHub repositories that span a broad spectrum of functions, projects, and applications.</li>
            <li>Engaged in daily assignments, weekly challenges, and solo/group projects, including a comprehensive group capstone project.</li>
            <li>Developed skills in problem-solving, project scoping, and agile methodologies through hands-on experience.</li>
            <li>Participated in project planning, design documentation, and iterative development.</li>
            <li>Developed key full-stack applications, including the ZipZap Shopping App (e-commerce platform) and the BCX FitJourney App (health and fitness tracker).</li>
          </ul>
        </div>
        <div className="photo">
          <img src='../documentation/images/Image1.jpg' alt='My Picture' />
          
        </div>
      </div>
    </div>
  );
}

export default GraduationDetails;
