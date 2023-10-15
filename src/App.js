import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('');
  
  const handleChange = (event) => {
    setTask(event.target.value);
  };


  const addgoal = (e) => {
    e.preventDefault();
    if(task.trim() !==''){
    setTasks([...tasks, task])
    setTask('');
    }
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <div className='formdiv'>
        <form on onSubmit={addgoal}>
          <input type='text' value={task} onChange={handleChange} />
          <button type='submit'>Add Goal</button>
        </form>
      </div>

      <ul className='unorderedlist'>
        {tasks.map((value, index) => (
          <>
          <li key={index} className='items'>
            {value} <button className='button' onClick={() => deleteTask(index)}>Delete</button>
          </li>
          
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
