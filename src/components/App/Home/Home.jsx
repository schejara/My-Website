import React from "react";
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img className="profile-img" src='../documentation/images/Img_3.jpg' alt="Shobha Chejara" />
        <div className="about-me">
          <h1 className="name">Shobha Chejara</h1>
          
          <p className="intro">
            Hello, I'm <strong>Shobha Chejara</strong>, a passionate Full Stack Developer with hands-on experience in modern web development technologies. I’m excited to contribute to innovative projects, create impactful applications, and work collaboratively in dynamic environments. My expertise spans both front-end and back-end development, with a focus on building responsive, user-friendly applications.
          </p>

         

          <p className="overview">
            With experience in both front-end and back-end development, I’ve worked on a variety of projects, including e-commerce platforms and health apps. I have hands-on experience with technologies such as <strong>React.js</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>AWS S3</strong> and <strong>PostgreSQL</strong>, and I’m constantly learning new techniques to stay on top of emerging technologies in the field.
          </p>

         

          <div className="cta">
            <p>Feel free to explore my work, check out my projects, and connect with me if you’re looking for a developer who is dedicated, solution-oriented, and passionate about creating high-quality applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
