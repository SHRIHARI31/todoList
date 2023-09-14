import React from 'react';
import tick from './assets/icons/check-tick-svgrepo-com.svg';
import './tododisplay.css';
import todoLogo from './assets/icons/calendar-svgrepo-com.svg';
import bin from './assets/icons/delete-svgrepo-com.svg';

const Tododisplay = ({ taskobject, deleteTask, setTaskObject  }) => {
  const striktask = (index) => {
    const updatedTaskObject = [...taskobject];
    updatedTaskObject[index].striked = !updatedTaskObject[index].striked;
    setTaskObject(updatedTaskObject); // You need to update the state here
  };

  return (
    <div className='todo-display-body'>
      <div className="todo-display">
        <section className='heading-section'>
          <h1>Todo task manager</h1>
          <img src={todoLogo} alt="" />
        </section>
        <section className='task-section'>
          <ul className='task-holder'>
            {taskobject.map((task, index) => (
              <div className="task-display-div" key={index}>
                <div className="task-deadline">task-deadline: {task.deadline}</div>
                <div className="action-holder">
                  <button className="task-completed">
                    <img src={tick} alt="" className='task-buttons' onClick={() => striktask(index)} />
                  </button>
                  <button className="delete-task" onClick={() => deleteTask(index)}>
                    <img src={bin} alt="" className='task-buttons' />
                  </button>
                </div>
                <li key={index} className={task.striked ? 'strike' : ''}>{task.task}</li>
              </div>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Tododisplay;
