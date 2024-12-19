import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';


function Nav() {
  

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title" > Shobha's Professional Hub</h2>
      </Link>
      <div>
       
        
          <>
            <Link className="navLink" to="/Home">
              Home
            </Link>
            <Link className="navLink" to="/Projects">
            Projects
            </Link>

            <Link className="navLink" to="/ResumePage">
              Resume 
            </Link>
            <Link className="navLink" to="/GraduationDetails">
               Education
            </Link>
            

            
          </>
       

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
