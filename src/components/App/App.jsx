import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from './Home/Home';
import AboutPage from '../AboutPage/AboutPage';
import ResumePage from '../ResumePage/Resume';
import GraduationDetails from '../GraduationDetails/GraduationDetails';
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
         
         

          
          <Route
            
            exact
            path="/about"
          >
            <AboutPage />
          </Route>
          <Route
            
            exact
            path="/GraduationDetails"
          >
            <GraduationDetails />
          </Route>

          
          
          <Route
           
            exact
            path="/ResumePage"
          >
            <ResumePage />
          </Route>   

          

          <Route
            exact
            path="/Home"
          >
            <Home/>
          </Route>

          
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
