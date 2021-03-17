import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);
  const userId = '299982cb-82aa-4a7b-9fef-e92fd7abd41b';

  useEffect(() => {
    // initiate a get request to api endpoint
    axios.get(`https://qyyetfu7di.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/tasks`)
      // promise resolves - update state of tasks
      .then(response => setTasks(response.data))
      // if error - log out error
      .catch(err => console.log(err))
  }, [])

  const deleteTask = id => {

    const updatedTasks = tasks.filter(task => task.taskId !== id);

    setTasks(updatedTasks);

  }

  const addTask = text => {

    const newTask = {
      description: text,
      completed: false,
    }

    axios.post(`https://qyyetfu7di.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/tasks`, newTask)
      .then(() => axios.get(`https://qyyetfu7di.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/tasks`))
      .then(response => setTasks(response.data))
      .catch(error => console.log(error))
  }

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completeTasks = tasks.filter(task => task.completed);

  return (
    <div className='App'>
      < Header taskCount={incompleteTasks.length} addTask={addTask} />
      <main className='all-tasks'>
        <TaskList deleteTask={deleteTask} tasks={incompleteTasks} status='incomplete' />
        <TaskList deleteTask={deleteTask} tasks={completeTasks} status='complete' />
      </main>
    </div>
  );
}

export default App;
