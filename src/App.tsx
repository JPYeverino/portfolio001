import React from 'react';
import './App.css';

enum TaskStatus {
  TODO = 'TO_DO',
  DONE = 'DONE'
}

interface MetaData {
  createdAt: string;
  modifiedAt: string;
  resources?: string[];
}

interface Task {
  description: string,
  status: TaskStatus,
  meta: MetaData
}

const TASKS_DB: Task[] = [
  {
    description: 'Make a short post section and add the first one about the deployment process.',
    status: TaskStatus.DONE,
    meta: {
      createdAt: 'July, 23rd - 21:15',
      modifiedAt: 'July, 24th - 23:57'
    }
  },
  {
    description: 'Read about the most famous or hipster UI Frameworks.',
    status: TaskStatus.DONE,
    meta: {
      createdAt: 'July, 23rd - 21:15',
      modifiedAt: 'July, 24th - 23:57'
    }
  },
  {
    description: 'Adopt 1 UI Framework and justify.',
    status: TaskStatus.DONE,
    meta: {
      createdAt: 'July, 23rd - 21:15',
      modifiedAt: 'July, 24th - 23:57'
    }
  },
  {
    description: 'Identify some reusable components.',
    status: TaskStatus.TODO,
    meta: {
      createdAt: 'July, 23rd - 21:15',
      modifiedAt: 'July, 23rd - 21:15'
    }
  },
  {
    description: 'Deploy this simple web page using AWS and github. If you can see this, I already accomplished.',
    status: TaskStatus.DONE,
    meta: {
      createdAt: 'July, 23rd - 20:05',
      modifiedAt: 'July, 23rd - 21:15'
    }
  },
  {
    description: 'Find a way to use markdown for reflections section.',
    status: TaskStatus.TODO,
    meta: {
      createdAt: 'July, 24th - 11:46',
      modifiedAt: 'July, 24th - 11:46'
    }
  },
  {
    description: 'Start using semantic tags, not only DIVs for everything.',
    status: TaskStatus.TODO,
    meta: {
      createdAt: 'July, 24th - 11:46',
      modifiedAt: 'July, 24th - 11:46'
    }
  }
];

interface Reflection {
  text: string;
  meta: MetaData
}

const REFLECTIONS_DB: Reflection[] = [
  {
    text: 'Yesterday after a long time of trying/procrastinating on deploy an app for myself finaly did it. Found a great tutorial on it, totally greatfull. Hopefully it won\'t be expensive as it\'s hosted on S3 Bucket from #AWS',
    meta: {
      createdAt: 'July, 24th - 11:47',
      modifiedAt: 'July, 24th - 11:47'
    }
  },
  {
    text: 'After reading a bunch of Medium, Twitter and Facebook posts, i decided not to use any UI framework at the moment. Let\'s look like the \'90s but I don\'t care for now.',
    meta: {
      createdAt: 'July, 25th - 00:00',
      modifiedAt: 'July, 25th - 00:00'
    }
  }
]

function Task(props: Task) {
  return (
    <li className="task-item">{props.description}
      <ul>
        <li className="task-meta">{props.meta.createdAt}</li>
        <li className="task-meta">{props.meta.modifiedAt}</li>
        {props.meta.resources?.map((resource, index) => {
          return (
            <li className="resource" key={index}><a href={`"${resource}"`} className="resourceLink">{resource}</a></li>
          )
        })}
      </ul>
    </li>
  );
}

function App() {
  const todoTasks: Task[] = TASKS_DB.filter(task => task.status === TaskStatus.TODO);
  const doneTasks: Task[] = TASKS_DB.filter(task => task.status === TaskStatus.DONE);
  return (
    <div className="main-container">
      <div className="header">
        <h1 className="first-line">
        J. Pablo Yeverino Portfolio
        </h1>
        <h2 className="subtitle">
          A journey of self commitment.
        </h2>
        <p className="project-description">
          I want to create my portfolio from scratch using Reactjs, Angular 2+ and Nodejs for REST and GraphQl apis. I will set little tasks daily so I can push myself to finish this project. Below you will see the tasks. 
        </p>
      </div>
      <div className="sections-container">
        <div className="tasks-container">
        <h3 className="status-title">To-do</h3>
        <div className="todo-task">
          <ul className="todo-task-list">
            {todoTasks.map((task, index) => (
            <Task
              description={task.description}
              meta={task.meta}
              status={task.status}
              key={index}
            />
            ))}
          </ul>
        </div>
        
        <h3 className="status-title">Done</h3>
        <div className="done-task">
          <ul className="done-tasks-list">
            {doneTasks.map((task, index) => (
              <Task
                description={task.description}
                meta={task.meta}
                status={task.status}
                key={index}
              />
              ))}
          </ul>
        </div>
      </div>
      <div className="reflections-container">
        <h3 className="section-title">Reflections</h3>
        {REFLECTIONS_DB.map((reflection, index) => (
          <Task
            description={reflection.text}
            meta={reflection.meta}
            status={TaskStatus.DONE}
            key={index}
          />
        ))}
      </div>
      </div>
  </div>
    
  );
}

export default App;
