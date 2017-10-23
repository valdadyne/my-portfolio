import React, { Component } from 'react';

import Navbar from './components/Navbar';
import me from './static/me.jpg';
import CV from './static/RMG CV.pdf';
import './App.css';

import Python from './static/skills/python.png';
import MongoDB from './static/skills/mongoDB.png';
import NodeJs from './static/skills/nodeJs.png';
import ReactJs from './static/skills/reactJs.png';
import Firebase from './static/skills/firebase.png';
import VueJs from './static/skills/vueJs.png'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="about" className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>About Me</h3>
              <h4>
                I'm a web applications developer based in Nairobi, Kenya.
              </h4>
              <p>
                I specialise in crafting responsive, usable web applications.
                I am passionate about the latest technologies and writing semantic, clean code.
              </p>
              <p>
                As a proud 21<sup>st</sup> Century African, I enjoy getting involved with projects that have the potential to uplift my community.
                I believe technology's greatest purpose is to change the lives of humanity for the better.
              </p>
              <div className="well skills">
                <span className="subtitle text-center"> Technology Toolbox </span>
                <div className="row">
                  <img className="col-sm-2 img" src={Python} alt="Python" title="Python!"/>
                  <img className="col-sm-2 img" src={VueJs} alt="VueJs" title="VueJs!" />  
                  <img className="col-sm-2 img" src={NodeJs} alt="NodeJs" title="NodeJs!"/> 
                  <img className="col-sm-2 img" src={ReactJs} alt="ReactJs" title="ReactJs!"/>   
                  <img className="col-sm-2 img" src={Firebase} alt="Firebase" title="Google Firebase!" />
                  <img className="col-sm-2 img" src={MongoDB} alt="MongoDB" title="MongoDB!" />                           
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-responsive" src={me} alt="Rodger M Gitau" />
              <div className="well links">
                <ul>
                  <li><a href={CV} target="_blank" rel="noopener noreferrer">CV</a></li>
                  <li><a href="https://github.com/valdadyne" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/rodgersgitau/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="mailto:rodgersgitau@gmail.com" target="_top">Email</a></li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
