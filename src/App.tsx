import React from 'react';
import './App.css';

function App() {
  return (
    <div className="first-container">
      <h1 className="first-line">
      J. Pablo Yeverino Portfolio
      </h1>
      <h2 className="subtitle">
        A journey of self commitment.
      </h2>
      <p className="project-description">
        I want to create my portfolio from scratch using Reactjs, Angular 2+ and Nodejs for REST and GraphQl apis. I will set little tasks daily so I can push myself to finish this project. Below you will see the tasks. 
      </p>
      <h3 className="status-title">To-do</h3>
      <div className="todo-tasks">
        <ul className="todo-tasks-list">
          <li className="task-item">Make a short post section and add the first one about the deployment process
            <ul>
              <li className="task-meta">Assigned: July, 23rd - 21:15</li>
              <li className="task-meta">Last update: July, 23rd - 21:15</li>
            </ul>
          </li>
          <li className="task-item">Read about the most famous or hipster UI Framekors
            <ul>
              <li className="task-meta">Assigned: July, 23rd - 21:15</li>
              <li className="task-meta">Last update: July, 23rd - 21:15</li>
            </ul>
          </li>
          <li className="task-item">Adopt 1 UI Framework and justify
            <ul>
              <li className="task-meta">Assigned: July, 23rd - 21:15</li>
              <li className="task-meta">Last update: July, 23rd - 21:15</li>
            </ul>
          </li>
          <li className="task-item">Identify some reusable components!!!
            <ul>
              <li className="task-meta">Assigned: July, 23rd - 21:15</li>
              <li className="task-meta">Last update: July, 23rd - 21:15</li>
            </ul>
          </li>
        </ul>
      </div>
      <h3 className="status-title">Done</h3>
      <div className="done-task">
        <ul className="done-tasks-list">
          <li className="done-task-item">Deploy this simple web page using AWS and github. If you can see this, I already accomplished
            <ul>
              <li className="task-meta">Assigned: July, 23rd - 20:05</li>
              <li className="task-meta">Last update: July, 23rd - 21:15</li>
              <li className="task-meta">Resources: <a href="https://www.youtube.com/watch?v=Mgs7jl430vs">WornOff Keys Youtube Channel</a></li>
            </ul>
          </li>
        </ul>
      </div>
    
    </div>
  );
}

export default App;
