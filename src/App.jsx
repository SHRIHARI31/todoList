import React, { useState } from 'react';
import addIcon from './assets/icons/add-to-svgrepo-com.svg';
import Tododisplay from './Tododisplay';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskobject, setTaskObject] = useState([]); // Change the state name to setTaskObject
  const [deadline, setDeadline] = useState('');

  const getTask = (value) => {
    setTask(value);
  };

  const addTask = () => {
    if (task.trim() !== '' && deadline.trim() !== '') {
      const newtask = { task, deadline, striked: false };
      setTaskObject([...taskobject, newtask]); // Update the state using setTaskObject
      setTask('');
      setDeadline('');
    }
  };

  const getDeadline = (value) => {
    setDeadline(value);
  };

  const deleteTask = (index) => {
    const updatedTaskObject = [...taskobject];
    updatedTaskObject.splice(index, 1);
    setTaskObject(updatedTaskObject); // Update the state using setTaskObject
  };

  return (
    <div className="todo-body">
      <div className="todo-container">
        <Tododisplay taskobject={taskobject} deleteTask={deleteTask} setTaskObject={setTaskObject} />
        <div className="input-area">
          <input
            type="text"
            placeholder="enter your task ....."
            value={task}
            onChange={(e) => getTask(e.target.value)}
            required
          />
          <div className="date-get">
            <span>Enter deadline</span>{' '}
            <input
              type="datetime-local"
              name=""
              id=""
              value={deadline}
              onChange={(e) => getDeadline(e.target.value)}
              required
            />
          </div>

          <button onClick={addTask}>
            {' '}
            <img src={addIcon} alt="click-logo" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
