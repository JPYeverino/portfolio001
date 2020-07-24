import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="first-container">
      <h1 className="first-line">
      J. Pablo Yeverino Portfolio
    </h1>
    <h3 className="subtitle">
      A journey of self commitment.
    </h3>
    <p className="project-description">
      I want to create my portfolio from scratch using Reactjs, Angular 2+ and Nodejs for REST and GraphQl apis. I will set little tasks daily so I can push myself to finish this project. Below you will see the tasks. 
    </p>
    <ul className="tasks-list">
      <li className="task-item">Deploy this simple web page using AWS and github. If you can see this, I already accomplished <span>July, 23rd - 20:05</span></li>
    </ul>
    </div>
  );
}

export default App;
